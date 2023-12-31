import baseResponse from '../config/baseResponseStatus';
import { errResponse, SUCCESSResponse } from '../config/response';
import { insertPwd, createAlbumUser } from './albumDao';
import pool from '../config/database';
export const createpwd = async (albumid, albumPassword) => {
    try {
        const insertPwdParams = [albumPassword, albumid];
        const connection = await pool.getConnection(async (conn) => conn);
        const createpwdResult = await insertPwd(connection, insertPwdParams);
        connection.release();
        return createpwdResult;
    } catch (err) {
        console.log(err);
        return errResponse(baseResponse.DB_ERROR);
    }
};

export const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
    console.log(currentYear);
    console.log(currentMonth);
};

export const addAlbumUser = async (albumId, userList) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        userList.forEach((userId) => {
            createAlbumUser(connection, [albumId, userId]);
        });
        connection.release();
        return SUCCESSResponse(baseResponse.SUCCESS);
    } catch (err) {
        console.log(err);
        return errResponse(baseResponse.DB_ERROR);
    }
};
