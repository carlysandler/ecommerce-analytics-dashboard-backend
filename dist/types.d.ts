export interface ApiResponse<T> {
    data: T;
    message?: string;
    errors?: string[];
}
export interface UserResponse {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    role: string;
    permissions: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface NewUserRequest {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    role: string;
    permissions: string[];
}
export interface UpdateUserRequest {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    permissions?: string[];
}
export declare class CustomError extends Error {
    message: string;
    code: number;
    constructor(message: string, code: number);
}
