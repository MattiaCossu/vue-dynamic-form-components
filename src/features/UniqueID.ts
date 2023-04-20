let UUID = 0;

export default function UniqueID() {
  return {
    getID: () => {
      UUID += 1
      return UUID
    }
  }
}
