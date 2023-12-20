interface Storage {
  setItem(key: string, value: string): void;
  getItem(key: string): string;
  removeItem(key: string): void;
}

export class LocalStorageUtil {
  private constructor() {}

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): any {
    try {
      return this.getStorage().getItem(key);
    } catch (e) {
      return null;
    }
  }

  getStorage(): Storage {
    return (window as any).localStorage as Storage;
  }
}
