// 手撕：TS 工具类型 FirstChar<T>

type FirstChar<T extends String> = T extends `${infer Fisrt}${string}` ? Fisrt : never;

type Result = FirstChar<'Hello'>; // Result 的类型为 'H'
type CharA = FirstChar<'Apple'>; // CharA 的类型为 'A'
type CharB = FirstChar<'Banana'>; // CharB 的类型为 'B'