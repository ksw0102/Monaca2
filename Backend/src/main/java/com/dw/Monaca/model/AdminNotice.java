package com.dw.Monaca.model;

import java.time.LocalDateTime;

import org.springframework.scheduling.annotation.EnableScheduling;

import com.dw.Monaca.jwtauthority.model.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

//@EnableScheduling // 어노테이션에 지정된 시간에 자동으로 이 메소드가 실행 //  이 코드가 예상대로 작동하려면 서버가 계속 실행되어 있어야 합니다. 서버가 중지되거나 재시작되면 스케줄링도 초기화됨
@Entity
@Table(name = "admin_notice")
public class AdminNotice {

	
	@Id // ID라는 것을 인식시켜주고 id값을 넣지 않아도 오류가 나지 않음!!
	@Column(name = "notice_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY) // databases마다 만드는 방법이 달라서 표기해줘야 함!
	private Long id;

	@ManyToOne
	private User author;

	@Column(name = "title", length = 50)
	private String title;   

	@Column(name = "text", length = 1000)
	private String text;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime createAt;

	@Column(name = "new_status", nullable = false)
	private boolean newStatus = true;
	
	public AdminNotice() {
		super();
	}

	public AdminNotice(Long id, User author, String title, String text, LocalDateTime createAt, boolean newStatus) {
		super();
		this.id = id;
		this.author = author;
		this.title = title;
		this.text = text;
		this.createAt = createAt;
		this.newStatus = newStatus;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public LocalDateTime getCreateAt() {
		return createAt;
	}

	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}

	public boolean isNewStatus() {
		return newStatus;
	}

	public void setNewStatus(boolean newStatus) {
		this.newStatus = newStatus;
	}


}
