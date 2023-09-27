// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  errors?: string[];
}

// User API Response
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

// User API Request for creating a new user
export interface NewUserRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role: string;
  permissions: string[];
}

// User API Request for updating an existing user
export interface UpdateUserRequest {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  permissions?: string[];
}

// Class Definitions
export class CustomError extends Error {
  constructor(public message: string, public code: number) {
    super(message);
  }
}
