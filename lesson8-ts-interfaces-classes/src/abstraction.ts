import { LocalUser } from './interface';

abstract class UserInfo {
    public name: string;
    public email: string;
    public companyPhraseSummary: string;

    public constructor(user: LocalUser) {
        this.name = user.name;
        this.email = user.email;
        this.companyPhraseSummary = `${user.company.name}, ${user.company.catchPhrase}`;
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Company: ${this.companyPhraseSummary}`);
    }
}

export class ShortUserInfo extends UserInfo {
    public constructor(user: LocalUser) {
        super(user);
    }
}

export class DetailedUserInfo extends UserInfo {
    public address: string;
    public phone: string;
    public website: string;

    public constructor(user: LocalUser) {
        super(user);
        this.address = `${user.address.street}, ${user.address.city}`;
        this.phone = user.phone;
        this.website = user.website;
    }

    public displayInfo(): void {
        super.displayInfo();
        console.log(`Address: ${this.address}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Website: ${this.website}`);
    }
}
