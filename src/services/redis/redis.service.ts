import { Injectable } from "@nestjs/common";
import { InjectRedis, Redis } from "@svtslv/nestjs-ioredis";
import exp from "constants";




@Injectable()

export class RedisService{
    constructor (
        @InjectRedis() private readonly redis:Redis
    ){}

    async set(key: string, data: { [k:string]: any}, expire?: number){
        return await this.redis.set( key, JSON.stringify(data), 'EX', expire)
    }

    async get(key:string){
        const data  = await this.redis.get(key)
        return data ? JSON.parse(data): null
    }

    async del(key: string){
        return await this.redis.del(key)
    }
    


}