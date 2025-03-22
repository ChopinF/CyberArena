Sa adaug un hp bar / nuj daca ramane timp
Deci vreau sa pot sa poata ataca un serviciu
un brut pentru encriptare pe un fisier
sa scaneze porturi

Sa mai adaug un input in care baga flag, si vreau in componenta aia sa am: flagCaptured: boolean = false

Problema 1:
ala un defensiv sa activeze niste services, iar ala din offensive sa le incerce sa le dezactiveze
de exemplu pentru ssh, sa incerce sa ghiceasca parola
sau sa fie folosit 🔹 3. Exploatarea unei Vulnerabilități (ex. CVE-2022-47966)
🔹 4. Apărarea (Patch sau Fail2Ban)

si pur si simplu fac switch in controller, adica :

const onEnter = (terminalInput: string) => {
  if (terminalInput === "bruteforce ssh") bruteForceSSH();
  else if (terminalInput === "exploit ssh") exploitSSH();
  else if (terminalInput === "patch ssh") patchSSH();
  else console.log("[System] Command not found.");
};

si pot complica asta

Problema 2:
mai multe fisiere ori encrypted ori hashed, pe care ala din defensiva le hashuieste cu un script pe care il facem noi

ala in defensiva sa foloseasca orice algo de hashing/enc,
iar ala din ofensiva sa incerce sa sparga, ori cu ceva tool online  
ceva cu parole , ca sa fie mai practic, sa gasesc un exemplu practic

sau alternativa:
      sa poata ala in defensiva sa aiba un minut in plus, si sa isi scrie sa modifice un script de bash de ceva encrypted
      si de exemplu ala sa modifice niste numere din cheie, iar ala din offensive sa faca un brute

Problema 3:
scanare de porturi cu o varianta simplificata de nmap
sa bage ceva gen : nmap [IP]
si dupa sa poata baga exploit discovery, si sa existe porturi false/true si sa incerce pur si simplu sa vada daca duce undeva

alternativ:
efectiv sa fie ceva: scan 192.168.1.1
sa zicem : [Offensive] Open ports: 22, 80, 443
deffender : [Defensive] Alert! Possible scan from 192.168.1.1
si ala sa tot incerce sa inchida sa deschida idk

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
