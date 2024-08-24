import Image from "next/image";


const parseYoutubeID = (url: string) => {
  // var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // Ver.1
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/; // Ver.2
  var match = url.match(regExp);
  return (match && match[7].length==11) ? match[7] : false;
}

const ShowList = () => {
  
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
