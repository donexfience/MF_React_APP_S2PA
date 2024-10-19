// Listen for the custom event in the app1
interface SharedData {
  user: string;
  age: number;
}
export const Subscribing: any = () => {
    console.log('calling')
  window.addEventListener(
    "app1-data-share",
    (event: CustomEvent<ShareData>) => {
      const recievedData = event.detail;
      console.log(recievedData, "data reciver here through event");
    }
  );
  return () => window.removeEventListener("app1-data-share", this);
};
