// TODO: Replace with real database if needed
export type User = {
	id: number;
	name: string;
	email: string;
};

let FakeDB: User[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john.doe@foo.bar',
	},
	{
		id: 2,
		name: 'Jane Doe',
		email: 'jane.doe@bar.foo',
	},
	{
		id: 3,
		name: 'Foo Bar',
		email: 'foo.bar@jane.doe',
	},
];

function delay(ms = Math.random() * 500) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

export const db = {
	async getUsers() {
		await delay();
		return FakeDB;
	},
	async getUser(id: number) {
		await delay();
		return FakeDB.find((user) => user.id === id);
	},
	async createUser(user: User) {
		await delay();
		FakeDB.push(user);
	},
	async updateUser(user: User) {
		await delay();

		FakeDB = FakeDB.map((u) => {
			if (u.id === user.id) {
				return user;
			}
			return u;
		});
	},
	async deleteUser(id: number) {
		await delay();
		FakeDB = FakeDB.filter((user) => user.id !== id);
	},
};
