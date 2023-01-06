import { Unit } from './unit';

export interface iPatient{
	id?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	age?: number;
	birthDate?: string;
	sex?: string;
	bloodType?: string;
	height?: number;
	heightUnit?: Unit[];
	weight?: number;
	weightUnit?: Unit[];
}

export class Patient implements iPatient {
	  constructor(
	    public id?: string,
	    public firstName?: string,
	    public lastName?: string,
	    public email?: string,
	    public age?: number,
	    public birthDate?: string,
	    public sex?: string,
	    public bloodType?: string,
	    public height?: number,
	    public heightUnit?: Unit[],
	    public weight?: number,
	    public weightUnit?: Unit[]
	  )
	  {}
}