declare module 'graphql-request' {
	import { DocumentNode } from 'graphql'

	export class GraphQLClient {
		constructor(endpoint: string, options?: RequestInit)
		request<T = any, V = Record<string, any>>(
			query: string | DocumentNode,
			variables?: V,
		): Promise<T>
	}

	export function gql(
		literals: TemplateStringsArray,
		...placeholders: any[]
	): DocumentNode
}
