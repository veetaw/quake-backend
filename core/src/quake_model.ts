import { prop, Typegoose } from "@hasezoey/typegoose";

export class QuakeEntity extends Typegoose {

    @prop()
    public readonly eventId: string;
    @prop()
    public readonly eventName: string;
    @prop()
    public readonly author: string;
    @prop()
    public readonly creationTime: Date;
    @prop()
    public readonly coordinates: Coordinates;
    @prop()
    public readonly depth: number;
    @prop()
    public readonly depthUncertainity: number;
    @prop()
    public readonly magnitude: number;
    @prop()
    public readonly magnitudeUncertainity: number;
    @prop()
    public readonly stationCount: number;
    @prop()
    public readonly time: Date;

    constructor(eventId: string,
                eventName: string,
                author: string,
                creationTime: Date,
                coordinates: Coordinates,
                depth: number,
                depthUncertainity: number,
                magnitude: number,
                magnitudeUncertainity: number,
                stationCount: number,
                time: Date) {
                super();
                this.eventId = eventId;
                this.eventName = eventName;
                this.author = author;
                this.creationTime = creationTime;
                this.coordinates = coordinates;
                this.depth = depth;
                this.depthUncertainity = depthUncertainity;
                this.magnitude = magnitude;
                this.magnitudeUncertainity = magnitudeUncertainity;
                this.stationCount = stationCount;
                this.time = time;
        }
}

export const QuakeModel = Object.create(QuakeEntity.prototype)
                                .getModelForClass(QuakeEntity);
