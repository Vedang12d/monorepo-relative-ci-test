import { speak } from '@jhasuraj01/speak'

export const sayHello = (speaker: string): string => {
  console.log("eigni");
  return speak({
    speaker,
    message: 'Something'
  })
}
