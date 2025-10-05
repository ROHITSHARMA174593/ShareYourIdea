import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks:{

    async jwt({token, account, profile}){
      if(account && profile){
        token.id = profile.id
      }
      return token;  
    },

    async session({session, token}){
      Object.assign(session, {id : "token.id"})
      return session;
    }


  }
});
