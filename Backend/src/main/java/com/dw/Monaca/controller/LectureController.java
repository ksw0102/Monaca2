package com.dw.Monaca.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dw.Monaca.dto.LectureDto;
import com.dw.Monaca.dto.ResponseDto;
import com.dw.Monaca.model.Lecture;
import com.dw.Monaca.service.impl.LectureServiceImpl;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST,
		RequestMethod.DELETE })
public class LectureController {

	private final LectureServiceImpl lectureServiceImpl;

	@Autowired
	public LectureController(LectureServiceImpl lectureServiceImpl) {
		this.lectureServiceImpl = lectureServiceImpl;
	}

	// 모든 Lecture 불러오기 / OK
	@GetMapping("/api/lecture/all")
	@PreAuthorize("hasAnyRole('ADMIN','PROFESSOR','USER')")
	public ResponseEntity<ResponseDto<List<LectureDto>>> getAllLecture() {
		return new ResponseEntity<>(lectureServiceImpl.getAllLecture(), HttpStatus.OK);
	}

	// Lecture 카테고리 별 불러오기 / OK
	@GetMapping("/api/lecture/lectureCategory/{categoryName}")
	@PreAuthorize("hasAnyRole('ADMIN','PROFESSOR','USER')")
	public ResponseEntity<ResponseDto<List<LectureDto>>> getAllLectureByCategoryName(
			@PathVariable(name = "categoryName") String categoryName) {
		return new ResponseEntity<>(lectureServiceImpl.getAllLectureByCategoryName(categoryName), HttpStatus.OK);
	}

	// professor 별 불러오기 / OK
	@GetMapping("/api/lecture/professor/{professorName}")
	@PreAuthorize("hasAnyRole('ADMIN','PROFESSOR','USER')")
	public ResponseEntity<ResponseDto<List<LectureDto>>> getAllLectureByProfessor(
			@PathVariable(name = "professorName") String professorName) {
		return new ResponseEntity<>(lectureServiceImpl.getAllLectureByProfessor(professorName), HttpStatus.OK);
	}

	// 유료강의만 불러오기 / OK
	@GetMapping("/api/lecture/paid")
	@PreAuthorize("hasAnyRole('ADMIN','PROFESSOR','USER')")
	public ResponseEntity<ResponseDto<List<LectureDto>>> getAllLectureByPaidLectures() {
		return new ResponseEntity<>(lectureServiceImpl.getAllLectureByPaidLectures(), HttpStatus.OK);
	}

	// 무료 강의만 불러오기 / OK
	@GetMapping("/api/lecture/free")
	@PreAuthorize("hasAnyRole('ADMIN','PROFESSOR','USER')")
	public ResponseEntity<ResponseDto<List<LectureDto>>> getAllLectureByFreeLectures() {
		return new ResponseEntity<>(lectureServiceImpl.getAllLectureByFreeLectures(), HttpStatus.OK);
	}

	// LecureID로 특정 강의 불러오기 / OK
	@GetMapping("/api/lecture/id/{id}")
	@PreAuthorize("hasAnyRole('ADMIN','PROFESSOR','USER')")
	public ResponseEntity<ResponseDto<LectureDto>> getLectureById(@PathVariable(name = "id") Long id) {
		return new ResponseEntity<>(lectureServiceImpl.getLectureById(id), HttpStatus.OK);
	}

	// Lecture 업로드 / OK
	@PostMapping("/api/lecture")
	@PreAuthorize("hasAnyRole('ADMIN','PROFESSOR')")
	public ResponseEntity<ResponseDto<Lecture>> createLecture(@RequestBody @Valid LectureDto lectureDto) {
		return new ResponseEntity<>(lectureServiceImpl.createLecture(lectureDto), HttpStatus.OK);
	}

	// LectrueID로 특정 강의 삭제 / OK
	@DeleteMapping("/api/lecture/delete/{id}")
	@PreAuthorize("hasAnyRole('ADMIN','PROFESSOR')")
	public ResponseEntity<ResponseDto<String>> deleteLectureById(@PathVariable(name = "id") Long id) {
		return new ResponseEntity<>(lectureServiceImpl.deleteLectureById(id), HttpStatus.OK);
	}

}
