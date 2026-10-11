import userRepository from '../repositories/UserRepository.js';
import authService from '../services/AuthService.js';

const seedList = [
    {
        email: 'admin@tecsup.edu.pe',
        password: 'Admin#2026',
        name: 'Administrador',
        lastName: 'General',
        phoneNumber: '987654321',
        birthdate: '1995-05-10',
        address: 'Av. Cascanueces 2221, Santa Anita',
        roles: ['admin']
    },
    {
        email: 'docente@tecsup.edu.pe',
        password: 'Docente#2026',
        name: 'Docente',
        lastName: 'Revisor',
        phoneNumber: '999888777',
        birthdate: '1990-01-01',
        address: 'Tecsup Lima',
        roles: ['admin']
    }
];

export default async function seedUsers() {
    for (const u of seedList) {
        const existing = await userRepository.findByEmail(u.email);
        if (!existing) {
            await authService.signUp(u);
            console.log(`Seeded user: ${u.email} / ${u.password}`);
        }
    }
}