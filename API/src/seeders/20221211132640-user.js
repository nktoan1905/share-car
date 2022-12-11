'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// password 123456
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					username: 'admin',
					password: '$2b$10$QHaVAdn3wOA1xQzAaXqPke9JmfD8GLn4ohZGdbpvbURNnEbWcYZ6W',
					fullName: 'Admin',
					email: 'Admin@gmail.com',
					img: null,
					age: '2000-05-19',
					phoneNumber: '0988791065',
					address: 'Hà nội',
					cardId: '123456789',
					bankId: '001200007618',
					roleId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'nktoan1905',
					password: '$2b$10$QHaVAdn3wOA1xQzAaXqPke9JmfD8GLn4ohZGdbpvbURNnEbWcYZ6W',
					fullName: 'Nguyễn Khánh Toàn',
					email: 'nktoan@gmail.com',
					img: null,
					age: '2000-05-19',
					phoneNumber: '0988791065',
					address: 'Hà nội',
					cardId: '123456789',
					bankId: '001200007618',
					roleId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'nktoan190520',
					password: '$2b$10$QHaVAdn3wOA1xQzAaXqPke9JmfD8GLn4ohZGdbpvbURNnEbWcYZ6W',
					fullName: 'Nguyễn Khánh Toàn',
					email: 'nktoan@gmail.com',
					img: null,
					age: '2000-05-19',
					phoneNumber: '0988791065',
					address: 'Hà nội',
					cardId: '123456789',
					bankId: '001200007618',
					roleId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
