import React, { useState } from 'react';
import Modal from 'react-modal';
import "../../css/Issue.css";
import { NavLink } from 'react-router-dom';

function Issue() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [situation, setSituation] = useState('');
    const [backlogname, setBacklogname] = useState('');

    // 이슈 목록을 배열로 관리하고, 각각의 이슈에 대한 정보를 객체로 저장합니다.
    const [issues, setIssues] = useState([
        { id: 1, title: 'Issue1', description: 'Issue1 내용', priority: 'High', situation: 'TODO', backlogname: 'Backlog1' },
        { id: 2, title: 'Issue2', description: 'Issue2 내용', priority: 'Middle', situation: 'IN PROGRESS', backlogname: 'Backlog2' },
        { id: 3, title: 'Issue3', description: 'Issue3 내용', priority: 'Low', situation: 'DONE', backlogname: 'Backlog3' },
        { id: 4, title: 'Issue4', description: 'Issue4 내용', priority: 'High', situation: 'TODO', backlogname: 'Backlog1' },
        { id: 5, title: 'Issue5', description: 'Issue5 내용', priority: 'Middle', situation: 'IN PROGRESS', backlogname: 'Backlog2' },
        { id: 6, title: 'Issue6', description: 'Issue6 내용', priority: 'Low', situation: 'DONE', backlogname: 'Backlog3' },
        { id: 7, title: 'Issue7', description: 'Issue7 내용', priority: 'High', situation: 'TODO', backlogname: 'Backlog1' },
        { id: 8, title: 'Issue8', description: 'Issue8 내용', priority: 'Middle', situation: 'IN PROGRESS', backlogname: 'Backlog2' },
        { id: 9, title: 'Issue9', description: 'Issue9 내용', priority: 'Low', situation: 'DONE', backlogname: 'Backlog3' }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hoveredIssue, setHoveredIssue] = useState(null);

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handlePriorityChange = (event) => setPriority(event.target.value);
    const handleSituationChange = (event) => setSituation(event.target.value);
    const handleBacklognameChange = (event) => setBacklogname(event.target.value);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const handleIssueSubmit = (event) => {
        event.preventDefault();
        const newIssue = {
            id: issues.length + 1,
            title,
            description,
            priority,
            situation,
            backlogname
        };
        setIssues([...issues, newIssue]);
        setTitle('');
        setDescription('');
        setPriority('');
        setSituation('');
        setBacklogname('');
        handleModalClose();
    };

    const handleIssueHover = (id) => {
        setHoveredIssue(id);
    };

    const handleIssueLeave = () => {
        setHoveredIssue(null);
    };

    const handleIssueDelete = (id) => {
        setIssues(issues.filter(issue => issue.id !== id));
    };

    return (
        <div className="issue-container">
            <div className="issue-header">
                <h2>이슈</h2>
                <button onClick={handleModalOpen}>Add Issue</button>
            </div>
            <div className="issue-list">
                {issues.map(issue => (
                    <div
                        key={issue.id}
                        className="issue"
                        onMouseEnter={() => handleIssueHover(issue.id)}
                        onMouseLeave={handleIssueLeave}
                    >
                        <NavLink to={`/issue/${issue.id}`}>
                            <h3>{issue.title}</h3>
                            <p>{issue.description}</p>
                        </NavLink>
                        {hoveredIssue === issue.id && (
                            <button onClick={() => handleIssueDelete(issue.id)}>Delete</button>
                        )}
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Add Issue Modal"
                className="add-issue-modal"
            >
                <h2>이슈 추가</h2>
                <form onSubmit={handleIssueSubmit}>
                    <label>
                        제목 :
                        <input type="text" value={title} onChange={handleTitleChange} required />
                    </label>
                    <label>
                        내용 :
                        <textarea value={description} onChange={handleDescriptionChange} required />
                    </label>
                    <label>
                        우선순위
                        <select value={priority} onChange={handlePriorityChange} required>
                            <option value="">우선순위</option>
                            <option value="High">긴급</option>
                            <option value="Middle">보통</option>
                            <option value="Low">보류</option>
                        </select>
                    </label>
                    <label>
                        Situation:
                        <select value={situation} onChange={handleSituationChange} required>
                            <option value="">중요도</option>
                            <option value="TODO">예정</option>
                            <option value="IN PROGRESS">진행중</option>
                            <option value="DONE">완료</option>
                        </select>
                    </label>
                    <label>
                        Backlog Name:
                        <input type="text" value={backlogname} onChange={handleBacklognameChange} required />
                    </label>
                    <button type="submit">Add</button>
                    <button onClick={handleModalClose}>Cancel</button>
                </form>
            </Modal>
        </div>
    );
}

export default Issue;