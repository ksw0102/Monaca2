package com.dw.Monaca.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dw.Monaca.dto.LectureDto;
import com.dw.Monaca.dto.ResponseDto;
import com.dw.Monaca.enumStatus.ResultCode;
import com.dw.Monaca.exception.InvalidRequestException;
import com.dw.Monaca.jwtauthority.model.User;
import com.dw.Monaca.jwtauthority.repository.UserRepository;
import com.dw.Monaca.jwtauthority.util.SecurityUtil;
import com.dw.Monaca.model.Lecture;
import com.dw.Monaca.model.LectureCategory;
import com.dw.Monaca.repository.LectureCategoryRepository;
import com.dw.Monaca.repository.LectureRepository;
import com.dw.Monaca.service.LectureService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LectureServiceImpl implements LectureService {

	private final LectureRepository lectureRepository;
	private final LectureCategoryRepository lectureCategoryRepository;
	private final UserRepository userRepository;

	@Autowired
	public LectureServiceImpl(LectureRepository lectureRepository, LectureCategoryRepository lectureCategoryRepository,
			UserRepository userRepository) {
		this.lectureRepository = lectureRepository;
		this.lectureCategoryRepository = lectureCategoryRepository;
		this.userRepository = userRepository;
	}

	private User getAuthenticatedUser() {
		String currentLoginId = SecurityUtil.getCurrentLoginId()
				.orElseThrow(() -> new InvalidRequestException("Authentication", "사용자 인증 정보를 찾을 수 없습니다."));
		return userRepository.findByLoginId(currentLoginId)
				.orElseThrow(() -> new InvalidRequestException("User Not Found", "회원이 아닙니다."));
	}

	// 모든 Lecture 불러오기
	@Override
	public ResponseDto<List<LectureDto>> getAllLecture() {
		List<Lecture> lectures = lectureRepository.findAll();
		if (lectures.isEmpty()) {
			throw new InvalidRequestException("Lecture Empty", "강의가 존재하지 않습니다.");
		}

		List<LectureDto> lectureDtos = new ArrayList<>();
		lectures.stream().forEach(data -> {
			LectureDto lectureDto = new LectureDto();
			lectureDto.setLectureCategory(data.getLectureCategory().getCategoryName());
			lectureDto.setProfessor(data.getProfessor().getLoginId());
			lectureDto.setLectureName(data.getLectureName());
			lectureDto.setLectureDescription(data.getLectureDescription());
			lectureDto.setId(data.getId());
			lectureDto.setAuthor(data.getAuthor().getLoginId());
			lectureDto.setLecturePlayTime(data.getLecturePlayTime());
			lectureDto.setImage(data.getImage());
			lectureDto.setPrice(data.getPrice());
			lectureDto.setVideo(data.getVideo());
			lectureDto.setCreateAt(data.getCreateAt().toString());
			lectureDtos.add(lectureDto);

		});
		return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureDtos, ResultCode.SUCCESS.getMsg());
	}

	// Lecture 카테고리 별 불러오기
	@Override
	public ResponseDto<List<LectureDto>> getAllLectureByCategoryName(String categoryName) {
		LectureCategory category = lectureCategoryRepository.findByCategoryName(categoryName);
		List<Lecture> lectures = lectureRepository.findByLectureCategory(category);

		if (lectures.isEmpty()) {
			throw new InvalidRequestException("Lecture Empty", "해당 카테고리의 강의가 존재하지 않습니다.");
		}

		List<LectureDto> lectureDtos = new ArrayList<>();
		lectures.stream().forEach(data -> {
			LectureDto lectureDto = new LectureDto();
			lectureDto.setLectureCategory(data.getLectureCategory().getCategoryName());
			lectureDto.setProfessor(data.getProfessor().getLoginId());
			lectureDto.setLectureName(data.getLectureName());
			lectureDto.setLectureDescription(data.getLectureDescription());
			lectureDto.setId(data.getId());
			lectureDto.setAuthor(data.getAuthor().getLoginId());
			lectureDto.setLecturePlayTime(data.getLecturePlayTime());
			lectureDto.setImage(data.getImage());
			lectureDto.setPrice(data.getPrice());
			lectureDto.setVideo(data.getVideo());
			lectureDto.setCreateAt(data.getCreateAt().toString());
			lectureDtos.add(lectureDto);

		});

		return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureDtos, ResultCode.SUCCESS.getMsg());
	}

	// Professor 별 불러오기
	@Override
	public ResponseDto<List<LectureDto>> getAllLectureByProfessor(String professorName) {
		Optional<User> professorOptional = userRepository.findByName(professorName);
		User professor = professorOptional.get();
		List<Lecture> lectures = lectureRepository.findByProfessor(professor);

		if (lectures.isEmpty()) {
			throw new InvalidRequestException("Lecture Empty", "해당 교수님의 강의가 존재하지 않습니다.");
		}

		List<LectureDto> lectureDtos = new ArrayList<>();
		lectures.stream().forEach(data -> {
			LectureDto lectureDto = new LectureDto();
			lectureDto.setLectureCategory(data.getLectureCategory().getCategoryName());
			lectureDto.setProfessor(data.getProfessor().getLoginId());
			lectureDto.setLectureName(data.getLectureName());
			lectureDto.setLectureDescription(data.getLectureDescription());
			lectureDto.setId(data.getId());
			lectureDto.setAuthor(data.getAuthor().getLoginId());
			lectureDto.setLecturePlayTime(data.getLecturePlayTime());
			lectureDto.setImage(data.getImage());
			lectureDto.setPrice(data.getPrice());
			lectureDto.setVideo(data.getVideo());
			lectureDto.setCreateAt(data.getCreateAt().toString());
			lectureDtos.add(lectureDto);

		});
		return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureDtos, ResultCode.SUCCESS.getMsg());
	}

	// 유료강의만 불러오기
	@Override
	public ResponseDto<List<LectureDto>> getAllLectureByPaidLectures() {
		List<Lecture> paidLectures = lectureRepository.findByPriceGreaterThan(0);
		if (paidLectures.isEmpty()) {
			throw new InvalidRequestException("Lecture Empty", "유료 강의가 존재하지 않습니다.");
		}

		List<LectureDto> lectureDtos = new ArrayList<>();
		paidLectures.stream().forEach(data -> {
			LectureDto lectureDto = new LectureDto();
			lectureDto.setLectureCategory(data.getLectureCategory().getCategoryName());
			lectureDto.setProfessor(data.getProfessor().getLoginId());
			lectureDto.setLectureName(data.getLectureName());
			lectureDto.setLectureDescription(data.getLectureDescription());
			lectureDto.setId(data.getId());
			lectureDto.setAuthor(data.getAuthor().getLoginId());
			lectureDto.setLecturePlayTime(data.getLecturePlayTime());
			lectureDto.setImage(data.getImage());
			lectureDto.setPrice(data.getPrice());
			lectureDto.setVideo(data.getVideo());
			lectureDto.setCreateAt(data.getCreateAt().toString());
			lectureDtos.add(lectureDto);

		});

		return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureDtos, ResultCode.SUCCESS.getMsg());
	}

	// 무료 강의만 불러오기
	@Override
	public ResponseDto<List<LectureDto>> getAllLectureByFreeLectures() {
		List<Lecture> freeLectures = lectureRepository.findByPrice(0);
		if (freeLectures.isEmpty()) {
			throw new InvalidRequestException("Lecture Empty", "무료 강의가 존재하지 않습니다.");
		}

		List<LectureDto> lectureDtos = new ArrayList<>();
		freeLectures.stream().forEach(data -> {
			LectureDto lectureDto = new LectureDto();
			lectureDto.setLectureCategory(data.getLectureCategory().getCategoryName());
			lectureDto.setProfessor(data.getProfessor().getLoginId());
			lectureDto.setLectureName(data.getLectureName());
			lectureDto.setLectureDescription(data.getLectureDescription());
			lectureDto.setId(data.getId());
			lectureDto.setAuthor(data.getAuthor().getLoginId());
			lectureDto.setLecturePlayTime(data.getLecturePlayTime());
			lectureDto.setImage(data.getImage());
			lectureDto.setPrice(data.getPrice());
			lectureDto.setVideo(data.getVideo());
			lectureDto.setCreateAt(data.getCreateAt().toString());
			lectureDtos.add(lectureDto);

		});

		return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureDtos, ResultCode.SUCCESS.getMsg());
	}

	// LecureID로 특정 강의 불러오기
	@Override
	public ResponseDto<LectureDto> getLectureById(Long id) {

		Lecture lecture = lectureRepository.findById(id)
				.orElseThrow(() -> new InvalidRequestException("Lecture Empty", "강의가 존재하지 않습니다."));

		LectureDto lectureDto = new LectureDto();
		lectureDto.setLectureCategory(lecture.getLectureCategory().getCategoryName());
		lectureDto.setProfessor(lecture.getProfessor().getName());
		lectureDto.setLectureName(lecture.getLectureName());
		lectureDto.setLectureDescription(lecture.getLectureDescription());
		lectureDto.setId(lecture.getId());
		lectureDto.setAuthor(lecture.getAuthor().getLoginId());
		lectureDto.setLecturePlayTime(lecture.getLecturePlayTime());
		lectureDto.setImage(lecture.getImage());
		lectureDto.setPrice(lecture.getPrice());
		lectureDto.setVideo(lecture.getVideo());
		lectureDto.setCreateAt(lecture.getCreateAt().toString());

		return new ResponseDto<>(ResultCode.SUCCESS.name(), lectureDto, ResultCode.SUCCESS.getMsg());
	}

	// Lecture 업로드
	@Override
	public ResponseDto<Lecture> createLecture(LectureDto lectureDto) {
		User author = getAuthenticatedUser();
		String professorName = lectureDto.getProfessor();
		Optional<User> professorOptional = userRepository.findByName(professorName);
		User professor = professorOptional.get();
		LectureCategory lectureCategory = lectureCategoryRepository.findByCategoryName(lectureDto.getLectureCategory());

		// Lecture 객체 생성
		Lecture lecture = new Lecture();
		lecture.setCreateAt(LocalDateTime.now());
		lecture.setAuthor(author);
		lecture.setProfessor(professor);
		lecture.setLectureCategory(lectureCategory);
		lecture.setLectureName(lectureDto.getLectureName());
		lecture.setPrice(lectureDto.getPrice());
		lecture.setLecturePlayTime(lectureDto.getLecturePlayTime());
		lecture.setVideo(lectureDto.getVideo());
		lecture.setImage(lectureDto.getImage());
		lecture.setLectureDescription(lectureDto.getLectureDescription());

		lectureRepository.save(lecture);
//	    // 해당 강의를 가르치는 교수의 '가르치는 강의' 목록에 이 강의 추가
		professor.getLecture().add(lecture);

//	    // 변경 사항 데이터베이스에 저장
		userRepository.save(professor);

		return new ResponseDto<>(ResultCode.SUCCESS.name(), null, "강의 등록이 완료되었습니다.");
	}

	// LectureID로 특정 강의 삭제
	@Override
	public ResponseDto<String> deleteLectureById(Long id) {

		Lecture lecture = lectureRepository.findById(id)
				.orElseThrow(() -> new InvalidRequestException("Lecture Empty", "강의가 존재하지 않습니다."));

		List<User> users = userRepository.findByLectureContaining(lecture);

		for (User user : users) {
			user.getLecture().remove(lecture);
			userRepository.save(user);
		}

		lectureRepository.delete(lecture);

		return new ResponseDto<>(ResultCode.SUCCESS.name(), null, "강의가 성공적으로 삭제되었습니다.");
	}

//	// LectureID로 특정 강의 수정
//	@Override
//	public ResponseDto<Lecture> updateLectureById(Lecture updateLecture, Long id) {
//	}

}
