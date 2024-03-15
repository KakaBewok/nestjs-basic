import { Controller, Get, Header, HttpCode, HttpRedirectResponse, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/api/users')
export class UserController {

    //using template engine
    @Get("/view/hello")
    viewHello(
        @Query('name') name: string,
        @Res() response: Response
    ){
        response.render('index.html', {
            title: 'Template Engine Mustache',
            name: name
        });
    }

    //cookie
    @Get("/set-cookie")
    setCookie(
        @Query('name') name: string,
        @Res() response: Response
    ){
        response.cookie('name', name);
        response.status(200).send('Success set cookie');
    }
    @Get('/get-cookie')
    getCookie(
        @Req() request: Request
    ) : string {
        return request.cookies['name'];
    }

    //response
    @Get("/sample-response")
    @Header("Content-Type", "application/json")
    @HttpCode(200)
    getSampleResponse(): Record<string, string> {
        return {
            "data" : "Hello json"
        };
    }
    //response redirect
    @Get("/redirect")
    @Redirect()
    redirect() : HttpRedirectResponse {
        return {
            url: "/api/users/sample-response",
            statusCode: 301,  
        }
    }

    //async
    @Get("/hello")
    async getAsync(
        @Query("first_name") firstName: string,
        @Query("last_name") lastName: string
    ): Promise<string> {
        return `Hello ${firstName || ''} ${lastName || ''}`;
    }

    //query
    @Get("/hello")
    getByIdQuery(
        @Query("first_name") firstName: string,
        @Query("last_name") lastName: string
    ): string {
        return `Hello ${firstName || ''} ${lastName || ''}`;
    }

    //param
    @Get("/:id")
    getByIdParam(@Param("id") id: string): string {
        return `get param ${id}`;
    }

    @Post()
    post(): string {
        return "post"
    }

    @Get("/sample")
    get(): string {
        return "get"
    }
}
