'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'AllCodes',
			[
				{
					codeName: 'R1',
					description: 'User',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'R2',
					description: 'Driver',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'S1',
					description: 'Pending',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'S2',
					description: 'Accepted',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'S3',
					description: 'End',
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
