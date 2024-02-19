package com.dw.Monaca.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dw.Monaca.jwtauthority.model.User;
import com.dw.Monaca.model.Lecture;
import com.dw.Monaca.model.LectureCategory;

public interface LectureRepository extends JpaRepository<Lecture, Long> {

//	// Lecture명으로 Lecture 찾기
//	Lecture findByLectureName(String lectureName);
	
	// Lecture명으로 lecture 찾기
	Optional<Lecture> findByLectureName(String lectureName);
	
	
	// LectureCategory로 Lecture 찾기
	List<Lecture> findByLectureCategory(LectureCategory lectureCategories);

	// Professor로 Lecture 찾기
	List<Lecture> findByProfessor(User professors);

	// price 기준으로 0원보다 높은 유료 Lecture List 찾기
	List<Lecture> findByPriceGreaterThan(int price);
   
	// price가 0원인 무료 Lecture List 찾기
	List<Lecture> findByPrice(int price);





	//	@EntityGraph(attributePaths = "users")
//	Optional<Lecture> findOneWithLecturesByUsername(String username);
//
//	@EntityGraph(attributePaths = "wishlist")
//	Optional<Lecture> findOneWithWishlistByUsername(String username);


	
	
}
