import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: string;
    permissions: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;
