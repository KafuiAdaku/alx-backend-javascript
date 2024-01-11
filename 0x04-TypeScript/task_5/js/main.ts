interface MajorCredits {
    credits: number;
    _majorBrand: undefined;
}

interface MinorCredits {
    credits: number;
    _minorBrand: undefined;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: undefined as undefined
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: undefined as undefined
    }
}