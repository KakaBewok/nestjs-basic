import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {

    @Get("/hello")
    getByIdQuery(@Query("name") name: string): string {
        return `Hello ${name || 'Guest'}`;
    }

    // @Get("/:id")
    // getByIdParam(@Param("id") id: string): string {
    //     return `get param ${id}`;
    // }

    @Post()
    post(): string {
        return "post"
    }

    @Get("/sample")
    get(): string {
        return "get"
    }
}
