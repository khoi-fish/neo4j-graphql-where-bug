const MeResolver = {
  Query: {
    me: (_source: any, _args: any, context: any) => ({
      myId() {
        return context.jwt.sub || ''
      },
      roles() {
        return context.jwt.roles || []
      },
    }),
  },
}

export { MeResolver }
