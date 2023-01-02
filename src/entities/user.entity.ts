import { hashSync, getRounds } from "bcryptjs"
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column()
    isAdm: boolean;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        const encrypted = getRounds(this.password)
        if (!encrypted) {
            this.password = hashSync(this.password, 10)
        }
    }
}

export { User }