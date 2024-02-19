package com.dw.Monaca.dto;

public class LectureHistoryDto {

	private Long id;
	
	private String userName;
		
	private String lectureName;
	
	private int progressRate;
	
	private String lastDate;

	public LectureHistoryDto() {
		super();
	}

	public LectureHistoryDto(Long id, String userName, String lectureName, int progressRate, String lastDate) {
		super();
		this.id = id;
		this.userName = userName;
		this.lectureName = lectureName;
		this.progressRate = progressRate;
		this.lastDate = lastDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getLectureName() {
		return lectureName;
	}

	public void setLectureName(String lectureName) {
		this.lectureName = lectureName;
	}

	public int getProgressRate() {
		return progressRate;
	}

	public void setProgressRate(int progressRate) {
		this.progressRate = progressRate;
	}

	public String getLastDate() {
		return lastDate;
	}

	public void setLastDate(String lastDate) {
		this.lastDate = lastDate;
	}

	
}
