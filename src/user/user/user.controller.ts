import { Controller, Get, Header, HttpCode, HttpRedirectResponse, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {

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
