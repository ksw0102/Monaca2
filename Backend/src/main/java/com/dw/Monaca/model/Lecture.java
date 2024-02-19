package com.dw.Monaca.model;

import java.time.LocalDateTime;

import com.dw.Monaca.jwtauthority.model.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

// lectureCategory => 4개(키오스크, 모바일, 웹사이트, 국가복지 ), total lectures => 20개 ( 각 카테고리별 5개씩 )

@Entity
@Table(name = "lecture")
public class Lecture {

	@Id // ID라는 것을 인식시켜주고 id값을 넣지 않아도 오류가 나지 않음!!
	@Column(name = "lecture_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY) // databases마다 만드는 방법이 달라서 표기해줘야 함!
	private Long id;

	// 작성자가 professor나 admin 둘 다가 될 수 있기 때문에 누가 썼는지 식별할 필요가 있음
	@ManyToOne
	private User author;
	
	// 강의 카테고리
	@ManyToOne
	private LectureCategory lectureCategory;

	// 강의 이름
	@Column(name = "lectureName", length = 50, unique = true)
	private String lectureName;

	@ManyToOne
	private User professor;
	
	// 강의 상세 설명
	@Column(name = "lectureDescription", length = 500)
	private String lectureDescription;

	// 강의 총 재생 시간
	@Column(name = "lecturePlayTime", length = 100)
	private int lecturePlayTime;

	// 강의 사진
	@Column(name = "image", length = 500)
	private String image;

	// 가격
	@Column(name = "price", length = 20)
	private Integer price;

	// 강의 비디오
	@Column(name = "video")
	private String video;

	// 강의 생성 날짜
	@Column(name = "create_at")
	private LocalDateTime createAt;
	
	
	public Lecture() {
		super();
	}


	public Lecture(Long id, User author, LectureCategory lectureCategory, String lectureName, User professor,
			String lectureDescription, int lecturePlayTime, String image, Integer price, String video,
			LocalDateTime createAt) {
		super();
		this.id = id;
		this.author = author;
		this.lectureCategory = lectureCategory;
		this.lectureName = lectureName;
		this.professor = professor;
		this.lectureDescription = lectureDescription;
		this.lecturePlayTime = lecturePlayTime;
		this.image = image;
		this.price = price;
		this.video = video;
		this.createAt = createAt;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public User getAuthor() {
		return author;
	}


	public void setAuthor(User author) {
		this.author = author;
	}


	public LectureCategory getLectureCategory() {
		return lectureCategory;
	}


	public void setLectureCategory(LectureCategory lectureCategory) {
		this.lectureCategory = lectureCategory;
	}


	public String getLectureName() {
		return lectureName;
	}


	public void setLectureName(String lectureName) {
		this.lectureName = lectureName;
	}


	public User getProfessor() {
		return professor;
	}


	public void setProfessor(User professor) {
		this.professor = professor;
	}


	public String getLectureDescription() {
		return lectureDescription;
	}


	public void setLectureDescription(String lectureDescription) {
		this.lectureDescription = lectureDescription;
	}


	public int getLecturePlayTime() {
		return lecturePlayTime;
	}


	public void setLecturePlayTime(int lecturePlayTime) {
		this.lecturePlayTime = lecturePlayTime;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public Integer getPrice() {
		return price;
	}


	public void setPrice(Integer price) {
		this.price = price;
	}


	public String getVideo() {
		return video;
	}


	public void setVideo(String video) {
		this.video = video;
	}


	public LocalDateTime getCreateAt() {
		return createAt;
	}


	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}


	
}
