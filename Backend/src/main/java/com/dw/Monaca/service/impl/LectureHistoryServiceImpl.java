package com.dw.Monaca.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dw.Monaca.dto.LectureHistoryDto;
import com.dw.Monaca.dto.ResponseDto;
import com.dw.Monaca.enumStatus.ResultCode;
import com.dw.Monaca.exception.InvalidRequestException;
import com.dw.Monaca.jwtauthority.model.User;
import com.dw.Monaca.jwtauthority.repository.UserRepository;
import com.dw.Monaca.jwtauthority.util.SecurityUtil;
import com.dw.Monaca.model.LectureHistory;
import com.dw.Monaca.repository.LectureHistoryRepository;
import com.dw.Monaca.service.LectureHistoryService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LectureHistoryServiceImpl implements LectureHistoryService{

	private final LectureHistoryRepository lectureHistoryRepository;
	private final UserRepository userRepository;
	
	
	@Autowired
	public LectureHistoryServiceImpl(LectureHistoryRepository lectureHistoryRepository, UserRepository userRepository) {
		this.lectureHistoryRepository = lectureHistoryRepository;
		this.userRepository = userRepository;
	}

	
	
	// 현재 로그인한 사용자 정보 가져오기
	private User getAuthenticatedUser() {
	    String currentLoginId = SecurityUtil.getCurrentLoginId()
	        .orElseThrow(() -> new InvalidRequestException("Authentication", "사용자 인증 정보를 찾을 수 없습니다."));
	    return userRepository.findByLoginId(currentLoginId)
	        .orElseThrow(() -> new InvalidRequestException("User Not Found", "회원이 아닙니다."));
	}

	
	// 현재 로그인한 유저의 LectureHistory를 전체 조회
	@Override
	public ResponseDto<List<LectureHistoryDto>> getAllLectureHistory() {
		User user = getAuthenticatedUser();
		List<LectureHistory> lectureHistorys = lectureHistoryRepository.findByUser(user);
		
		if(lectureHistorys.isEmpty()) {
			
			 throw new InvalidRequestException("LectureHistory Empty", "수강 이력이 없습니다.");
		}
		
		List<LectureHistoryDto> lectureHistoryDtos = new ArrayList<>();
		lectureHistorys.stream().forEach(data -> {
			LectureHistoryDto lectureHistoryDto = new LectureHistoryDto();
			lectureHistoryDto.setId(data.getId());
			lectureHistoryDto.setUserName(data.getUser().getName());
			lectureHistoryDto.setLectureName(data.getLecture().getLectureName());
			lectureHistoryDto.setProgressRate(data.getProgressRate());
			lectureHistoryDto.setLastDate(data.getLastDate().toString());
			lectureHistoryDtos.add(lectureHistoryDto);
		});
		
		
		return new ResponseDto<>(ResultCode.SUCCESS.name(),lectureHistoryDtos,ResultCode.SUCCESS.getMsg());
	}

	
	// 현재 로그인한 유저의 LectureHistory ID로 조회
	@Override
	public ResponseDto<LectureHistoryDto> getLectureHistoryById(Long id) {
		User user = getAuthenticatedUser();
		Optional<LectureHistory> lectureHistoryOptional = lectureHistoryRepository.findById(id);
		
		if(lectureHistoryOptional.isEmpty()) {
			
			 throw new InvalidRequestException("Not Found", "해당 강의 수료 이력이 존재하지 않습니다.");
		}
		
		LectureHistory lectureHistory = lectureHistoryOptional.get();
		
		if(!lectureHistory.getUser().equals(user)){
			
			throw new InvalidRequestException("Unauthorized","해당 LectureHistory에 대한 권한이 없습니다.");
			
		}
			LectureHistoryDto lectureHistoryDto = new LectureHistoryDto();
			lectureHistoryDto.setId(lectureHistory.getId());
			lectureHistoryDto.setUserName(lectureHistory.getUser().getName());
			lectureHistoryDto.setLectureName(lectureHistory.getLecture().getLectureName());
			lectureHistoryDto.setProgressRate(lectureHistory.getProgressRate());
			lectureHistoryDto.setLastDate(lectureHistory.getLastDate().toString());
			
		return new ResponseDto<>(ResultCode.SUCCESS.name(),lectureHistoryDto,ResultCode.SUCCESS.getMsg());
	}

}
