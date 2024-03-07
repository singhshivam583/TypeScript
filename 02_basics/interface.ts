interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName:string, value: number): number
}

interface User {
    githubToken?: string
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}


const shivam: User = {dbId:12344, email: 'shivamsingh175503@gmail.com', userId: 12345,
    startTrail: () => {
        return 'trail started'
    },
    getCoupon: (newUserame:'shivam10', off:100) => {
        return 10
    }
}

shivam.email = 'shivam@gmail.com' 





export{}