declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_URI: string;
            TOKEN: string;
            KUBSTI_API: string;
        }
    }

    // Они не всегда определяются в index.ts, но тк они и не используются, это неважно
    interface Date {
        getWeek(): number;
        stringDate(): string;
    }

    interface IUnifiedGroup {
        name: string;

        getTextSchedule(date: Date = new Date(), opts: { showDate?: boolean } = {}): Promise<string>;
        getTextNextSchedule(): Promise<string>;
        getTextFullSchedule(startDate: Date): Promise<string[] | null>;

        getTextExams(): Promise<string | undefined>;
        getTextEvents(date = new Date()): Promise<string | null>;

        getRawTeachersList(): Promise<string[]>;
        getRawTeachersAndDisciplines(): Promise<{ [key: string]: { [key: string]: string[] } }>;

        isZFOGroup(): boolean;

        selectDayKeyboard(date: Date = new Date()): KeyboardButton[][];
    }
}

export {};
