class Rational {
    private numerator: number;
    private denominator: number;

    // 默认构造函数，创建 0/1
    constructor(numerator: number = 0, denominator: number = 1) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        const gcd = this.greatestCommonDivisor(numerator, denominator);
        this.numerator = numerator / gcd;
        this.denominator = denominator / gcd;
    }

    // 获取分子
    getNumerator(): number {
        return this.numerator;
    }

    // 获取分母
    getDenominator(): number {
        return this.denominator;
    }

    // 添加两个有理数
    add(r: Rational): Rational {
        const newNumerator = this.numerator * r.getDenominator() + r.getNumerator() * this.denominator;
        const newDenominator = this.denominator * r.getDenominator();
        return new Rational(newNumerator, newDenominator);
    }

    // 减去另一个有理数
    subtract(r: Rational): Rational {
        const newNumerator = this.numerator * r.getDenominator() - r.getNumerator() * this.denominator;
        const newDenominator = this.denominator * r.getDenominator();
        return new Rational(newNumerator, newDenominator);
    }

    // 乘以另一个有理数
    multiply(r: Rational): Rational {
        const newNumerator = this.numerator * r.getNumerator();
        const newDenominator = this.denominator * r.getDenominator();
        return new Rational(newNumerator, newDenominator);
    }

    // 除以另一个有理数
    divide(r: Rational): Rational {
        if (r.getNumerator() === 0) {
            throw new Error("Cannot divide by zero.");
        }
        const newNumerator = this.numerator * r.getDenominator();
        const newDenominator = this.denominator * r.getNumerator();
        return new Rational(newNumerator, newDenominator);
    }

    // 判断两个有理数是否相等
    equals(r: Rational): boolean {
        return this.numerator === r.getNumerator() && this.denominator === r.getDenominator();
    }

    // 求最大公约数
    private greatestCommonDivisor(a: number, b: number): number {
        if (b === 0) {
            return a;
        }
        return this.greatestCommonDivisor(b, a % b);
    }

    // 返回有理数的字符串形式
    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}

// 测试 Rational 类
const r1 = new Rational(1, 2);
const r2 = new Rational(3, 4);

console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);

const r3 = r1.add(r2);
console.log(`r1 + r2 = ${r3}`);

const r4 = r1.subtract(r2);
console.log(`r1 - r2 = ${r4}`);

const r5 = r1.multiply(r2);
console.log(`r1 * r2 = ${r5}`);

const r6 = r1.divide(r2);
console.log(`r1 / r2 = ${r6}`);
