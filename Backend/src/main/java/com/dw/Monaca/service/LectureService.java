package com.dw.Monaca.service;
// 강의

import java.util.List;

import com.dw.Monaca.dto.LectureDto;
import com.dw.Monaca.dto.ResponseDto;
import com.dw.Monaca.model.Lecture;

// 인터페이스의 모든 메서드는 기본적으로 public이다.
public interface LectureService {
	
	// 모든 Lecture 불러오기
	ResponseDto<List<LectureDto>> getAllLecture();
	
	// Lecture 카테고리 별 불러오기
	ResponseDto<List<LectureDto>> getAllLectureByCategoryName(String categoryName);
	
	// professor 별 불러오기
	ResponseDto<List<LectureDto>> getAllLectureByProfessor(String professorName);
	
	// 유료강의만 불러오기
	ResponseDto<List<LectureDto>> getAllLectureByPaidLectures();

	//무료 강의만 불러오기
	ResponseDto<List<LectureDto>> getAllLectureByFreeLectures();
	
	// LecureID로 특정 강의 불러오기
	ResponseDto<LectureDto> getLectureById(Long id);
	
	// Lecture 업로드
	ResponseDto<Lecture> createLecture(LectureDto lectureDto);
	
	// LectrueID로 특정 강의 삭제
	ResponseDto<String> deleteLectureById(Long id);
	
//	// LectureID로 특정 강의 수정
//	public ResponseDto<Lecture> updateLectureById(Lecture updateLecture, Long id);


	
}
