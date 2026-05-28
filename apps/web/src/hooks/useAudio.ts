export interface Options {
    rate?: number // 语速
    volume?: number // 音量
    pitch?: number // 音调
    lang?: string // 语音
}

let instance: SpeechSynthesisUtterance | null = null
const getInstance = (options: Options) => {
    if (!instance) {
        instance = new SpeechSynthesisUtterance()
        const { rate = 0.7, volume = 1, pitch = 1, lang = 'en-US' } = options;
        instance.rate = rate
        instance.volume = volume
        instance.pitch = pitch
        instance.lang = lang
    }
    return instance
}

export const useAudio = (options: Options) => {
    const pronounce = getInstance(options)// 发音

    const playAudio = (word: string) => {
        pronounce.text = word // 设置单词的发音
        speechSynthesis.speak(pronounce) //播放发音
    }

    return { playAudio }
}