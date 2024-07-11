import { api } from '@/lib/utils';
import axios from 'axios';
import NextAuth, { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOption = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          const { email, password } = credentials;
          const response = await api.post('/auth/login', { email, password });
          return response?.data;
        } catch (error) {
          // 해당 구간에서 에러 메세지를 받아서 다시 에러를 던져줘야 form에서 에러메세지 처리 가능
          if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.message);
          }
          throw new Error('로그인 실패');
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    maxAge: 60 * 60,
  },

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      const copyToken = { ...token };
      if (user) {
        copyToken.accessToken = user?.accessToken;
      }
      return copyToken;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const copySession = { ...session };
      copySession.accessToken = token.accessToken;
      return copySession;
    },
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
