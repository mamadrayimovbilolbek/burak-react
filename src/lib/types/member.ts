import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
  _id: string;
  memberStatus: MemberStatus;
  memberType: MemberType;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberStatus?: MemberStatus;
  memberType?: MemberType;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
}

export interface MemberUpdateInput {
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberNick?: string;
  memberPhone?: string;
  memberPassword?: string;
}


export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}