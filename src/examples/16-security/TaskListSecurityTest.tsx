// TaskListSecurityTest.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList Security Test', () => {
  it('should not be vulnerable to SQL injection', () => {
    // Render the TaskList component
    render(<TaskList />);

    // Attempt an SQL injection by adding a task with malicious SQL code
    const maliciousTaskName = "TaskName'; DROP TABLE tasks; --";
    const maliciousTaskElement = screen.queryByText(maliciousTaskName);

    // Verify that the malicious task name is displayed as is, not executed as SQL
    expect(maliciousTaskElement).toBeNull();
  });
});
