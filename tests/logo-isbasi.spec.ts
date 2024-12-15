import { LogoIsbasi } from '../src/logo-isbasi';

describe('LogoIsbasi SDK', () => {
	const sdk = new LogoIsbasi({ apiKey: 'fake-api-key', baseURL: 'http://mock-api' });

	it('should fetch tasks', async () => {
		jest.spyOn(sdk as any, 'client').mockResolvedValueOnce({
			data: [{ id: '1', title: 'Test Task', description: 'A task', status: 'pending' }],
		});

		const tasks = await sdk.getTasks();
		expect(tasks).toEqual([{ id: '1', title: 'Test Task', description: 'A task', status: 'pending' }]);
	});
});
