package com.dw.Monaca.dto;

import jakarta.validation.constraints.NotNull;

public class LectureDto {

	private Long id;
	
	private String author;

	@NotNull
	private String lectureCategory;
	
	@NotNull
	private String lectureName;
	

	private String professor;
	
	private String lectureDescription;
	
	@NotNull
	private int lecturePlayTime;
	
	@NotNull
	private String image;
	
	@NotNull
	private Integer price;
	
	@NotNull
	private String video;
	
	
	private String createAt;

	
	public LectureDto() {
		super();
	}


	public LectureDto(Long id, String author, @NotNull String lectureCategory, @NotNull String lectureName,
			String professor, String lectureDescription, @NotNull int lecturePlayTime, @NotNull String image,
			@NotNull Integer price, @NotNull String video, String createAt) {
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


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public String getLectureCategory() {
		return lectureCategory;
	}


	public void setLectureCategory(String lectureCategory) {
		this.lectureCategory = lectureCategory;
	}


	public String getLectureName() {
		return lectureName;
	}


	public void setLectureName(String lectureName) {
		this.lectureName = lectureName;
	}


	public String getProfessor() {
		return professor;
	}


	public void setProfessor(String professor) {
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


	public String getCreateAt() {
		return createAt;
	}


	public void setCreateAt(String createAt) {
		this.createAt = createAt;
	}


}
