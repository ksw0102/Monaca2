package com.dw.Monaca.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dw.Monaca.dto.ClassRoomDto;
import com.dw.Monaca.dto.ClassRoomUpdateDto;
import com.dw.Monaca.dto.LectureSummaryDto;
import com.dw.Monaca.dto.ResponseDto;
import com.dw.Monaca.dto.StudentProgressDto;
import com.dw.Monaca.enumStatus.ResultCode;
import com.dw.Monaca.exception.InvalidRequestException;
import com.dw.Monaca.jwtauthority.model.User;
import com.dw.Monaca.jwtauthority.repository.UserRepository;
import com.dw.Monaca.jwtauthority.util.SecurityUtil;
import com.dw.Monaca.model.ClassRoom;
import com.dw.Monaca.model.Lecture;
//import com.dw.Monaca.model.LectureCategory;
import com.dw.Monaca.model.LectureHistory;
import com.dw.Monaca.repository.ClassRoomRepository;
import com.dw.Monaca.repository.LectureHistoryRepository;
import com.dw.Monaca.repository.LectureRepository;
import com.dw.Monaca.service.ClassRoomService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ClassRoomServiceImpl implements ClassRoomService{

	private final ClassRoomRepository classRoomRepository;
	private final LectureHistoryRepository lectureHistoryRepository;
	private final UserRepository userRepository;
	private final LectureRepository lectureRepository;
	
	@Autowired
	public ClassRoomServiceImpl(ClassRoomRepository classRoomRepository,
			LectureHistoryRepository lectureHistoryRepository, UserRepository userRepository,
			LectureRepository lectureRepository) {
		super();
		this.classRoomRepository = classRoomRepository;
		this.lectureHistoryRepository = lectureHistoryRepository;
		this.userRepository = userRepository;
		this.lectureRepository = lectureRepository;
	}


	// 현재 로그인한 사용자 정보 가져오기
	private User getAuthenticatedUser() {
	    String currentLoginId = SecurityUtil.getCurrentLoginId()
	        .orElseThrow(() -> new InvalidRequestException("Authentication", "사용자 인증 정보를 찾을 수 없습니다."));
	    return userRepository.findByLoginId(currentLoginId)
	        .orElseThrow(() -> new InvalidRequestException("User Not Found", "회원이 아닙니다."));
	}


	// 현재 로그인한 유저의 ClassRoom을 전체 조회
	@Override
	public ResponseDto<List<ClassRoomDto>> getAllClassRoom() {
		User user = getAuthenticatedUser();
		List<ClassRoom> classRoom = classRoomRepository.findByUser(user);
		
		if(classRoom.isEmpty()) {
			return new ResponseDto<>(ResultCode.SUCCESS.name(), null, "현재 수강중인 강의가 없습니다.");
		}
		
		List<ClassRoomDto> classRoomDtos = new ArrayList<>();
		classRoom.stream().forEach(data -> {
			ClassRoomDto classRoomDto = new ClassRoomDto();
			classRoomDto.setLectureName(data.getLecture().getLectureName());
			classRoomDto.setProgressRate(data.getProgressRate());
			classRoomDto.setRecentVewing(data.getRecentViewing());
			classRoomDto.setUser(data.getUser().getLoginId());
			classRoomDto.setViewingRecord(data.getViewingRecord());
			classRoomDto.setId(data.getId());
			classRoomDtos.add(classRoomDto);
		});
		
		return new ResponseDto<>(ResultCode.SUCCESS.name(),classRoomDtos,ResultCode.SUCCESS.getMsg());
	}

	
	// 현재 로그인한 유저의 ClassRoom을 ClassRoom ID로 조회
	@Override
	public ResponseDto<ClassRoomDto> getClassRoomById(Long id) {
	    User user = getAuthenticatedUser();
	    Optional<ClassRoom> classRoomOptional = classRoomRepository.findById(id);

	    if(classRoomOptional.isEmpty()) {
	        return new ResponseDto<>(ResultCode.SUCCESS.name(), null, "현재 수강중인 강의가 없습니다.");
	    }

	    ClassRoom classRoom = classRoomOptional.get();
	    
	    if(!classRoom.getUser().equals(user)) {
	        throw new InvalidRequestException("Unauthorized", "해당 ClassRoom에 대한 권한이 없습니다.");
	    }
	    
	    ClassRoomDto classRoomDto = new ClassRoomDto();
	    classRoomDto.setLectureName(classRoom.getLecture().getLectureName());
	    classRoomDto.setProgressRate(classRoom.getProgressRate());
	    classRoomDto.setRecentVewing(classRoom.getRecentViewing());
	    classRoomDto.setViewingRecord(classRoom.getViewingRecord());
	    classRoomDto.setUser(user.getLoginId());
	    classRoomDto.setId(classRoom.getId());
	    
	    return new ResponseDto<>(ResultCode.SUCCESS.name(),classRoomDto,ResultCode.SUCCESS.getMsg());
	}


	// 현재 로그인한 유저의 ClassRoomID를 이용하여 삭제
	@Override
	public ResponseDto<String> deleteClassRoomById(Long id) {
		User user = getAuthenticatedUser();
		ClassRoom classRoom = classRoomRepository.findById(id)
				.orElseThrow(()-> new InvalidRequestException("ClassRoom Not Found", "해당 ClassRoom을 찾을 수 없습니다."));
		if(!classRoom.getUser().equals(user)) {
			throw new InvalidRequestException("Unauthorized", "해당 ClassRoom에 대한 권한이 없습니다.");
		}
		classRoomRepository.deleteById(id);
		return new ResponseDto<>(ResultCode.SUCCESS.name(),"Delete","해당 ClassRoom이 삭제되었습니다.");
		
	}

	// 현재 로그인한 유저의 ClassRoom의 진도율과 최근 시청기록을 업데이트
		@Transactional	
		@Override
		public ResponseDto<ClassRoomDto> updateClassRoom(Long id, ClassRoomUpdateDto updateClassRoom) {
			Optional<ClassRoom> classRoomOptional = classRoomRepository.findById(id);
			User user = getAuthenticatedUser();
			
			if(classRoomOptional.isEmpty()) {
			    return new ResponseDto<>(ResultCode.SUCCESS.name(), null, "현재 수강중인 강의가 없습니다.");
			}
			ClassRoom classRoom = classRoomOptional.get();

			Lecture lecture = classRoom.getLecture();
			Optional<LectureHistory> lectureHistoryOptional = lectureHistoryRepository.findByLecture(lecture);
			
			if(!classRoom.getUser().equals(user)) {
				throw new InvalidRequestException("Unauthorized", "해당 ClassRoom에 대한 권한이 없습니다.");
			}


			// 강의의 총 길이를 가져옴.
			int lecturePlayTime = lecture.getLecturePlayTime();

			// ---- 프론트에서 강의를 시작한 시간부터 현재 시간까지의 차이를 계산해서 보내주는 방식 적용 ----
			
			// ClassRoom에서 viewingRecord를 가져옴.
//			int viewingRecord = classRoom.getViewingRecord();
//			// 프론트엔드에서 보내준 viewingRecord를 기존 viewingRecord에 더해줌
//			int newViewingRecord = viewingRecord + updateClassRoom.getViewingRecord();
//
//			// 진도율을 계산합니다. (viewingRecord / lecturePlayTime) * 100
//			int progressRate = (int) Math.round(((double) newViewingRecord / lecturePlayTime) * 100);

//
//
//			// 계산된 진도율과 현재 시청한 영상의 길이를 updateClassRoom 객체에 저장함.
//			updateClassRoom.setProgressRate(progressRate);
//			updateClassRoom.setViewingRecord(newViewingRecord);
//			
			// ---------------------------------------------------------------------------
			
			// ------------- 프론트에서 강의를 시청한 총 시간을 백엔드에 전달하는 방식 적용 -------------
			// 프론트엔드에서 보내준 viewingRecord를 그대로 사용
			int newViewingRecord = updateClassRoom.getViewingRecord();

			// 진도율을 계산합니다. (newViewingRecord / lecturePlayTime) * 100
			int progressRate = (int) Math.round(((double) newViewingRecord / lecturePlayTime) * 100);


			// 계산된 진도율과 현재 시청한 영상의 길이를 updateClassRoom 객체에 저장함.
			updateClassRoom.setProgressRate(progressRate);
			updateClassRoom.setViewingRecord(newViewingRecord);
			//-----------------------------------------------------------------------------
			
			
			// ClassRoom 객체의 상태를 updateClassRoom 객체로 업데이트함.
			classRoom.update(updateClassRoom);

			// ClassRoom 객체를 업데이트함.
			ClassRoom saveClassRoom = classRoomRepository.save(classRoom);

			// ClassRoom 객체의 상태 변경 로직이 ClassRoom 클래스 안에 캡슐화됨.
			// ClassRoomServiceImpl 클래스는 ClassRoom 객체의 상태를 직접 변경하지 않아도 됨.
			// ClassRoom 클래스의 update 메서드를 호출하여 classRoom 객체의 필드를 한 번에 업데이트

		    //classRoom에 있는 강의가 lectureHistory에도 있을 경우에 
		    if(lectureHistoryOptional.isPresent()) {
		    	
		    	LectureHistory lectureHistory = lectureHistoryOptional.get();
		    	
		    	// lectureHistory의 progressRate와 lastDate도 업데이트 되어야 함.
		    	// lectueHistory의 progressRate = classRoom의 progressRate
		    	// lectureHistory의 lastDate = classRoom의 recentViewing
		    	if (saveClassRoom.getProgressRate() > lectureHistory.getProgressRate()) {
		    		// 새로운 진도율이 이전 진도율보다 클 경우에만 진도율을 업데이트하도록 설정
		    	    lectureHistory.setProgressRate(saveClassRoom.getProgressRate());
		    	    lectureHistory.setLastDate(saveClassRoom.getRecentViewing());
		    	    
		    	}
		    			    
		    	lectureHistoryRepository.save(lectureHistory); 
		    			    	
		    } else if(progressRate >= 80) {
		        // LectureHistory가 없으면, 새로 생성
		        LectureHistory lectureHistory = new LectureHistory();
		        lectureHistory.setUser(classRoom.getUser());
		        lectureHistory.setLecture(classRoom.getLecture());
		        lectureHistory.setProgressRate(classRoom.getProgressRate());
		        lectureHistory.setLastDate(LocalDateTime.now());
		        lectureHistoryRepository.save(lectureHistory);

		        // LectureHistory의 상태를 업데이트함.
		        lectureHistory.setProgressRate(progressRate);
		        lectureHistory.setLastDate(saveClassRoom.getRecentViewing());

		        // LectureHistory를 저장함.
		        lectureHistoryRepository.save(lectureHistory);
		    }
		    ClassRoomDto classRoomDto = new ClassRoomDto();
		    classRoomDto.setId(saveClassRoom.getId());
		    classRoomDto.setLectureName(saveClassRoom.getLecture().getLectureName());
		    classRoomDto.setProgressRate(saveClassRoom.getProgressRate());
		    classRoomDto.setRecentVewing(saveClassRoom.getRecentViewing());
		    classRoomDto.setViewingRecord(saveClassRoom.getViewingRecord());
		    classRoomDto.setUser(saveClassRoom.getUser().getLoginId());
		    
		    
		    return new ResponseDto<>(ResultCode.SUCCESS.name(), classRoomDto, "ClassRoom이 성공적으로 업데이트 되었습니다.");
			
		}
		
		// 진도율100%로 업데이트 후 classRoom에서는 삭제, lectureHistory에 생성
		@Override
		public ResponseDto<ClassRoomDto> updateClassRoomAndAddLectureToClassRoom(Long id, ClassRoomUpdateDto classRoomUpdateDto){
		    Optional<ClassRoom> classRoomOptional = classRoomRepository.findById(id);
		    User user = getAuthenticatedUser();

		    if(classRoomOptional.isEmpty()) {
		        return new ResponseDto<>(ResultCode.SUCCESS.name(), null, "현재 수강중인 강의가 없습니다.");
		    }
		    ClassRoom classRoom = classRoomOptional.get();

		    Lecture lecture = classRoom.getLecture();
		    Optional<LectureHistory> lectureHistoryOptional = lectureHistoryRepository.findByLecture(lecture);

		    if(!classRoom.getUser().equals(user)) {
		        throw new InvalidRequestException("Unauthorized", "해당 ClassRoom에 대한 권한이 없습니다.");
		    }

		    // 진도율을 100%로 설정하고 viewingRecord를 0으로 설정
		    classRoom.setProgressRate(100);
		    classRoom.setViewingRecord(0);

		    // ClassRoom 객체를 업데이트함.
		    ClassRoom saveClassRoom = classRoomRepository.save(classRoom);

		    // classRoom에 있는 강의가 lectureHistory에도 있을 경우에 
		    if(lectureHistoryOptional.isPresent()) {
		        LectureHistory lectureHistory = lectureHistoryOptional.get();

		        // lectureHistory의 progressRate와 lastDate도 업데이트 되어야 함.
		        // lectueHistory의 progressRate = classRoom의 progressRate
		        // lectureHistory의 lastDate = classRoom의 recentViewing
		        lectureHistory.setProgressRate(saveClassRoom.getProgressRate());
		        lectureHistory.setLastDate(saveClassRoom.getRecentViewing());

		        lectureHistoryRepository.save(lectureHistory); 

		    } else {
		        // LectureHistory가 없으면, 새로 생성
		        LectureHistory lectureHistory = new LectureHistory();
		        lectureHistory.setUser(classRoom.getUser());
		        lectureHistory.setLecture(classRoom.getLecture());
		        lectureHistory.setProgressRate(classRoom.getProgressRate());
		        lectureHistory.setLastDate(LocalDateTime.now());
		        lectureHistoryRepository.save(lectureHistory);
		    }

		    // ClassRoom에서 강의 삭제
		    classRoomRepository.delete(saveClassRoom);

		    ClassRoomDto classRoomDto = new ClassRoomDto();
		    classRoomDto.setId(saveClassRoom.getId());
		    classRoomDto.setLectureName(saveClassRoom.getLecture().getLectureName());
		    classRoomDto.setProgressRate(saveClassRoom.getProgressRate());
		    classRoomDto.setRecentVewing(saveClassRoom.getRecentViewing());
		    classRoomDto.setViewingRecord(saveClassRoom.getViewingRecord());
		    classRoomDto.setUser(saveClassRoom.getUser().getLoginId());

		    return new ResponseDto<>(ResultCode.SUCCESS.name(), classRoomDto, "ClassRoom이 성공적으로 업데이트 되었습니다.");
		}

//	// 현재 로그인한 유저의 진도율(progressRate)이 80%에 도달한 ClassRoom을 LectureHistory에 생성
//	@Override
//	public ResponseDto<ClassRoom> createToLectureHistory(Long id) {
//	    User user = getAuthenticatedUser();
//	    ClassRoom classRoom = classRoomRepository.findById(id)
//	            .orElseThrow(()-> new InvalidRequestException("ClassRoom Not Found", "해당 ClassRoom을 찾을 수 없습니다."));
//	    if(!classRoom.getUser().equals(user)) {
//	        throw new InvalidRequestException("Unauthorized", "해당 ClassRoom에 대한 권한이 없습니다.");
//	    }
//	    
//	    if(classRoom.getProgressRate() < 80) {
//	        throw new InvalidRequestException("Invalid Progress Rate", "진도율이 80%에 도달하지 않았습니다.");
//	    }
//	    
//	 // LectureHistory로 이동
//	    LectureHistory lectureHistory = new LectureHistory();
//	    lectureHistory.setUser(classRoom.getUser());
//	    lectureHistory.setLecture(classRoom.getLecture());
//	    lectureHistory.setProgressRate(classRoom.getProgressRate());
//	    lectureHistory.setLastDate(LocalDateTime.now());
//	    lectureHistoryRepository.save(lectureHistory);
//
//	    return new ResponseDto<>(ResultCode.SUCCESS.name(), classRoom, "해당 ClassRoom이 LectureHistory로 이동되었습니다.");
//	}

	// LectureHistory에서 선택한 강의를 ClassRoom에 다시 추가
	@Override
	public ResponseDto<ClassRoomDto> addLectureToClassRoom(Long lectureHistoryId) {
	    User user = getAuthenticatedUser();
	    LectureHistory lectureHistory = lectureHistoryRepository.findById(lectureHistoryId)
	            .orElseThrow(()-> new InvalidRequestException("LectureHistory Not Found", "해당 LectureHistory을 찾을 수 없습니다."));
	    
	    if(!lectureHistory.getUser().equals(user)) {
	        throw new InvalidRequestException("Unauthorized", "해당 ClassRoom에 대한 권한이 없습니다.");
	    }
	    	
	    // ClassRoom에 추가
	    ClassRoom classRoom = new ClassRoom();
	    classRoom.setUser(lectureHistory.getUser());
	    classRoom.setLecture(lectureHistory.getLecture());
	    classRoom.setProgressRate(lectureHistory.getProgressRate());
	    classRoom.setViewingRecord(0); // 시청 기록을 초기화하고
	    classRoom.setRecentViewing(LocalDateTime.now()); //최근 시청 날짜를 설정
	    classRoomRepository.save(classRoom);
	    
	    ClassRoomDto classRoomDto = new ClassRoomDto();
	    classRoomDto.setId(classRoom.getId());
	    classRoomDto.setUser(classRoom.getUser().getLoginId());
	    classRoomDto.setLectureName(classRoom.getLecture().getLectureName());
	    classRoomDto.setProgressRate(classRoom.getProgressRate());
	    classRoomDto.setRecentVewing(classRoom.getRecentViewing());
	    classRoomDto.setViewingRecord(classRoom.getViewingRecord());
	    
	    return new ResponseDto<>(ResultCode.SUCCESS.name(), classRoomDto, "LectureHistory에서 선택한 강의가 ClassRoom에 추가되었습니다.");
	}
	
	// 교수(현재 로그인한 사람)가 강의하는 과목의 카테고리별로 학생들의 진도율을 조회하는 기능
	@Override
	public ResponseDto<Map<String, List<StudentProgressDto>>> getStudentProgressByProfessor() {
	  
		User professor = getAuthenticatedUser();
		List<Lecture> lectures = lectureRepository.findByProfessor(professor);

	    // 강의의 카테고리별로 분류하여 Map에 저장
	    Map<String, List<StudentProgressDto>> result = new HashMap<>();

	    for (Lecture lecture : lectures) {
	        List<ClassRoom> classRooms = classRoomRepository.findByLecture(lecture);

	        for (ClassRoom classRoom : classRooms) {
	            String categoryName = lecture.getLectureCategory().getCategoryName();
	            User student = classRoom.getUser();
	            double progressRate = classRoom.getProgressRate();

	            if (!result.containsKey(categoryName)) {
	                result.put(categoryName, new ArrayList<>());
	            }

	            result.get(categoryName).add(new StudentProgressDto(student.getName(), lecture.getLectureName(), progressRate));
	        }
	    }

	    return new ResponseDto<>(ResultCode.SUCCESS.name(),result,ResultCode.SUCCESS.getMsg());
	}
	
	
	 // 특정 강의를 수강 중인 사람들의 수를 조회하는 메서드
	public ResponseDto<Long> getParticipantCountByLectureName(String lectureName) {
	    Optional<Lecture> lectureOptional = lectureRepository.findByLectureName(lectureName);

	    if (lectureOptional.isEmpty()) {
	        throw new InvalidRequestException("Lecture Empty", "해당 이름의 강의가 존재하지 않습니다.");
	    }

	    Lecture lecture = lectureOptional.get();
	    long participantCount = classRoomRepository.countByLecture(lecture);

	    return new ResponseDto<>(ResultCode.SUCCESS.name(), participantCount, ResultCode.SUCCESS.getMsg());
	}
	
	// 유/무료 강의 전체에서 카테고리별 + 강의명별 로 각 강의를 듣는 사용자의 수가 얼마나 되는지 
	public ResponseDto<List<LectureSummaryDto>> getLectureSummary() {
	    List<Lecture> lectures = lectureRepository.findAll();

	    List<LectureSummaryDto> lectureSummary = lectures.stream()
	            .map(lecture -> {
	                LectureSummaryDto dto = new LectureSummaryDto();
	                dto.setCategory(lecture.getLectureCategory().getCategoryName());
	                dto.setLectureName(lecture.getLectureName());

	                long participantCount = classRoomRepository.countByLecture(lecture);
	                dto.setParticipantCount(participantCount);

	                return dto;
	            })
	            .collect(Collectors.toList());
	    
	    return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureSummary, ResultCode.SUCCESS.getMsg());
	}
	
	//유료 강의 전체에서 카테고리별 + 강의명별 결제가 얼마나 되었는지
	// LectureSummaryDto의 리스트를 반환. 유료 강의에 대한 정보를 요약하여 반환.
	public ResponseDto<List<LectureSummaryDto>> getLectureSummaryByPaid() {
	    // 유료 강의만 가져옴. // paidLectures 리스트에 저장
	    List<Lecture> paidLectures = lectureRepository.findByPriceGreaterThan(0);

	    
	    // 각 Lecture에서 LectureSummaryDto로 변환
	    List<LectureSummaryDto> lectureSummary = paidLectures.stream()
	            .map(lecture -> {
	                LectureSummaryDto dto = new LectureSummaryDto();
	                dto.setCategory(lecture.getLectureCategory().getCategoryName());
	                dto.setLectureName(lecture.getLectureName());

	                
	                // 이 강의를 구매한 사용자의 수. 
	                int purchaseCount = classRoomRepository.countByLecture(lecture);
	                // 결제 총액은 각강의의 가격과 해당 강의의 ClassRoom 데이터의 수의 곱임.
	                // (각 강의의 가격 x 해당 강의를 듣는 사람들의 수(해당 lecture를 받아오는 classroom의 수) = 결제 총액
	                int totalPayment = lecture.getPrice() * (int) purchaseCount;
	                // 한 강의의 사이트 내 결제 총액
	                dto.setTotalPayment(totalPayment);

	                return dto;
	            })
	            .collect(Collectors.toList());
	    
	    return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureSummary, ResultCode.SUCCESS.getMsg());
	}

	// 무료 강의 전체에서 카테고리별 + 강의명별 각 강의를 듣는 사용자의 수가 얼마나 되는지 
	public ResponseDto<List<LectureSummaryDto>> getLectureSummaryByFree() {
	    List<Lecture> freeLectures = lectureRepository.findByPrice(0);

	    List<LectureSummaryDto> lectureSummary = freeLectures.stream()
	            .map(lecture -> {
	                LectureSummaryDto dto = new LectureSummaryDto();
	                dto.setCategory(lecture.getLectureCategory().getCategoryName());
	                dto.setLectureName(lecture.getLectureName());

	                // 무료 강의이므로 결제 총액 대신 강의를 듣는 사람의 수를 계산합니다.
	                long participantCount = classRoomRepository.countByLecture(lecture);
	                dto.setParticipantCount(participantCount);

	                return dto;
	            })
	            .collect(Collectors.toList());
	    
	    return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureSummary, ResultCode.SUCCESS.getMsg());
	}




}
	
	
	
