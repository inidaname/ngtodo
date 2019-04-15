import { Injectable } from '@nestjs/common';
// import {  } from '@nestjs/common/http';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDTO } from './userd';
import { User } from './user.interface';
import { Model } from 'mongoose';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(@InjectModel('user') private readonly userModel: Model<User>) { }

    async userLogin(email: string, password: string): Promise<User> {
        return await this.userModel.findOne({ email, password })
            .then((result) => {
                if (!result) {
                    return { error: 'No User Found' };
                }

                return result;
            }).catch((err) => {
                return err;
            });
    }

    async getAllUser(): Promise<User[]> {
        return await this.userModel.find()
            .then((result: User[]) => {
                if (result.length === 0) {
                    return { error: 'No Registered Users' };
                }

                return result;
            }).catch((err: Error) => {
                return err;
            });
    }

    async getUserById(id: string): Promise<User> {
        return await this.userModel.findById(id);
    }

    async createUser(user: User): Promise<User> {
        const newItem = new this.userModel(user);
        return await newItem.save()
            .then((result: User) => {
                if (!result) {
                    return { error: 'User could not be created' }
                }

                return result;
            }).catch((err: Error) => {
                return err;
            });
    }

    async deleteUser(id: string): Promise<User> {
        return await this.userModel.findOneAndDelete(id)
            .then((result: User) => {
                if (!result) {
                    return { error: 'No user to delete' }
                }

                return result;
            }).catch((err: Error) => {
                return err;
            });
    }

    async updateUser(id: string, userData: User): Promise<User> {
        return await this.userModel.findOneAndUpdate(id, userData, { new: true })
            .then((result: User) => {
                if (!result) {
                    return { error: 'Message could not return updated user' }
                }

                return result;
            }).catch((err: Error) => {
                return err;
            });
    }

    public handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}
