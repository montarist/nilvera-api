export interface Task {
	id: string;
	title: string;
	description: string;
	status: 'pending' | 'completed';
	createdAt: string;
}
