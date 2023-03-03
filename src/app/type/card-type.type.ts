import {ITransport} from "../interfaces/transport.interface";
import {ISparePart} from "../interfaces/spare-part.interface";
import {IOil} from "../interfaces/oil.interface";

export type cardTypeUnion = ITransport | ISparePart | IOil;
