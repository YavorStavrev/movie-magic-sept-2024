import express from 'express';
import cookieParser from 'cookie-parser';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import session from 'express-session';
import { tempData } from '../middlewares/tempDataMIddleware.js';

export default function expressInit(app){
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    }));
    app.use(authMiddleware);
    app.use(tempData);
};