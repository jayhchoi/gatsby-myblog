import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import { getContactHref } from '../../../utils'
import styles from './Author.module.scss'

export const PureAuthor = ({ data }) => {
	const { author } = data.site.siteMetadata

	return (
		<div className={styles['author']}>
			<p className={styles['author__bio']}>
				{author.bio}
				<br></br>
				<Link
					to="/pages/about"
					// className={styles['author__bio-twitter']}
					// href={getContactHref('twitter', author.contacts.twitter)}
					// rel="noopener noreferrer"
					// target="_blank"
				>
					About <strong>{author.name}</strong>
				</Link>
			</p>
		</div>
	)
}

export const Author = (props) => (
	<StaticQuery
		query={graphql`
			query AuthorQuery {
				site {
					siteMetadata {
						author {
							name
							bio
							contacts {
								# twitter
								email
							}
						}
					}
				}
			}
		`}
		render={(data) => <PureAuthor {...props} data={data} />}
	/>
)

export default Author
