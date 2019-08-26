/**
 * 货币类
 * 一个专门用于中文货币运算的的类，解决货币运算过程中问题
 * @maxvalue 90071992547409.91
 * @minvalue -90071992547409.91
 * @example
 * let m = [];
 * let c = new XMCurrency(-12345);
 * m.push(c);
 * m.push(c.add(109999));
 * m.push(c.sub(10));
 * m.push(c.div(0.01));
 * m.push(c.mul(10));
 * m.push(c.mul(0.01));
 *
 * let tt = new XMCurrency(0);
 * tt.selfAdd(2805307.04);
 * tt.selfAdd(4323515.28);
 * tt.selfAdd(2805307.04);
 * tt.selfAdd(3281107.13);
 * m.push(tt);
 *
 * for(let mm of m) {
 *      console.log(mm.value, mm.intValue, mm.toString(), mm.format(true, true), mm.Chinese());
 * }
 *
 * //输出结果
 * //-12345 -1234500 -12345.00 ￥-1,2345.00 负壹万贰仟叁佰肆拾伍元整
 * //97654 9765400 97654.00 ￥9,7654.00 玖万柒仟陆佰伍拾肆元整
 * //-12355 -1235500 -12355.00 ￥-1,2355.00 负壹万贰仟叁佰伍拾伍元整
 * //-1234500 -123450000 -1234500.00 ￥-123,4500.00 负壹佰贰拾叁万肆仟伍佰元整
 * //-123450 -12345000 -123450.00 ￥-12,3450.00 负拾贰万叁仟肆佰伍拾元整
 * //-123.45 -12345 -123.45 ￥-123.45 负壹佰贰拾叁元肆角伍分
 * //13215236.49 1321523649 13215236.49 ￥1321,5236.49 壹仟叁佰贰拾壹万伍仟贰佰叁拾陆元肆角玖分
 */
export declare class XMCurrency {
    /** 货币整数值，单位分 */
    private m_IntValue;
    /** 是否有错误 */
    private m_ErrFlag;
    /** 错误信息 */
    private m_ErrMsg;
    /**
     * 构造函数
     * @param paramValue 初始值
     */
    constructor(paramValue?: number | string | XMCurrency);
    /** 判断指定的对象，是不是指定的XMCurrency对象 */
    static isCurrency(paramV: any): boolean;
    /** 货币值 */
    readonly value: number;
    /**
     * 赋值
     * @param {number | string | XMCurrency} paramValue 新值
     * @return {XMCurrency} 返回当前对象
     */
    assign(paramValue?: number | string | XMCurrency): XMCurrency;
    /** 货币整数值，精确到分 */
    readonly intValue: number;
    /** 是否有错 */
    readonly isErr: boolean;
    /** 错误信息 */
    readonly errMsg: string;
    /** 重置为0 */
    Reset(): void;
    /**
     * 加一个值
     * @param {number | string | XMCurrency} paramNumber 值
     * @return {XMCurrency} 返回计算后的Currency对象
     */
    add(paramNumber: number | string | XMCurrency): XMCurrency;
    /**
     * 自加一个值
     * @param {number | string | XMCurrency} paramNumber 值
     * @return {XMCurrency} 返回自己
     */
    selfAdd(paramNumber: number | string | XMCurrency): XMCurrency;
    /**
     * 减一个值
     * @param {number | string | XMCurrency} paramNumber 值
     * @return {XMCurrency} 返回计算后的Currency对象
     */
    sub(paramNumber: number | string | XMCurrency): XMCurrency;
    /**
     * 自减一个值
     * @param {number | string | XMCurrency} paramNumber 值
     * @return {XMCurrency} 返回计算后的Currency对象
     */
    selfSub(paramNumber: number | string | XMCurrency): XMCurrency;
    /**
     * 乘一个值
     * @param {number | string} paramNumber 值
     * @return {XMCurrency} 返回计算后的Currency对象
     */
    mul(paramNumber: number | string): XMCurrency;
    /**
     * 自乘一个值
     * @param {number | string} paramNumber 值
     * @return {boolean} 计算结果
     *  - true 表示计算成功
     *  - false 表示计算失败
     */
    selfMul(paramNumber: number | string): boolean;
    /**
     * 除以一个值
     * @param {number | string} paramNumber 值
     * @return {XMCurrency} 返回计算后的Currency对象
     */
    div(paramNumber: number | string): XMCurrency;
    /**
     * 自除以一个值
     * @param {number | string} paramNumber 值
     * @return {boolean} 计算结果
     *  - true 表示计算成功
     *  - false 表示计算失败
     */
    selfDiv(paramNumber: number | string): boolean;
    /**
     * 货币的整数部分
     * @return {number} 返回整数
     */
    readonly yuan: number;
    /**
     * 货币的小数部分，单位为分
     */
    readonly cent: number;
    /**
     * 生成字符串
     */
    toString(): string;
    /**
     * 生成中文大写数字
     * - 引用来源：https://www.jb51.net/article/89661.htm
     * - 增加在元后，角为0的情况增加0，如0.01为零元零角
     * - 选项prefix:表示自定义人民币前缀，没有默认为“人民币”
     * - 选项negative:表示自定义负数前缀，没有默认为“负”
     * - 选项zheng：表示自定义整后缀，没有默认为“整”，有些情况可能需要“正”, 使用的时候请注意选项
     * @param {{prefix?: string, negative?:string, zheng?: string}} paramOpts 如果是负数时，前面的前缀
     * @return {string} 中文大写结果
     */
    Chinese(paramOpts?: {
        prefix?: string;
        negative?: string;
        zheng?: string;
    } | null): string;
    /**
     * 格式化输出
     * @param {boolean} paramUseSymbol 是否带有"￥"符号
     * @param {*} paramCNYsplit 是否以中文四数字一组
     * @return {string} 生成后的字符串
     */
    format(paramUseSymbol?: boolean, paramCNYsplit?: boolean): string;
    toJSON(): number;
}
