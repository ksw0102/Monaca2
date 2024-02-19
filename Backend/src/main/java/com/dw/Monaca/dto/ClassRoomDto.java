package com.dw.Monaca.dto;

import java.time.LocalDateTime;

public class ClassRoomDto {

	private Long id;
	
	private String user;
	
	private String lectureName;
	
	private int progressRate;
	
	private int viewingRecord;
	
	private LocalDateTime recentVewing;

	public ClassRoomDto() {
		super();
	}

	public ClassRoomDto(Long id, String user, String lectureName, int progressRate, int viewingRecord,
			LocalDateTime recentVewing) {
		super();
		this.id = id;
		this.user = user;
		this.lectureName = lectureName;
		this.progressRate = progressRate;
		this.viewingRecord = viewingRecord;
		this.recentVewing = recentVewing;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
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

	public int getViewingRecord() {
		return viewingRecord;
	}

	public void setViewingRecord(int viewingRecord) {
		this.viewingRecord = viewingRecord;
	}

	public LocalDateTime getRecentVewing() {
		return recentVewing;
	}

	public void setRecentVewing(LocalDateTime recentVewing) {
		this.recentVewing = recentVewing;
	}


}
