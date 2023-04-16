from datetime import datetime, timedelta

from github import Github

# Prompt for the GitHub username and access token
username = input("Enter your GitHub username: ")

# Prompt for the personal access token
access_token = input("Enter your GitHub personal access token: ")

# Create a GitHub API client object
gitHubObj = Github(access_token)

# Get the user object
user = gitHubObj.get_user(username)

# Get all repositories for the user
repos = user.get_repos()
# Initialize dictionaries to store the commit counts for each day of the week
commit_counts_all_time = {
    "Monday": 0,
    "Tuesday": 0,
    "Wednesday": 0,
    "Thursday": 0,
    "Friday": 0,
    "Saturday": 0,
    "Sunday": 0
}

commit_counts_last_year = {
    "Monday": 0,
    "Tuesday": 0,
    "Wednesday": 0,
    "Thursday": 0,
    "Friday": 0,
    "Saturday": 0,
    "Sunday": 0
}

# Calculate the date one year ago from today
one_year_ago = datetime.now() - timedelta(days=365)

# Iterate over all repositories and update the commit counts dictionaries
for repo in repos:
    try:

        # Get all commits in the repository
        commits = repo.get_commits()

        for commit in commits:

            day_of_week = (datetime.strptime(commit.commit.author.date.strftime(
                "%Y-%m-%d"), "%Y-%m-%d").strftime("%A"))

            # Update the commit counts for all time
            commit_counts_all_time[day_of_week] += 1

            # Update the commit counts for the last year, if applicable
            if commit.commit.author.date >= one_year_ago:
                commit_counts_last_year[day_of_week] += 1

    except:

        # Handle any errors that occur while fetching commits for a repository
        print(f"Error while fetching commits for {repo.full_name}")


# Determine the total number of commits for all time and last year
total_commits_all_time = sum(commit_counts_all_time.values())
total_commits_last_year = sum(commit_counts_last_year.values())

# Determine the most active day for all time and last year
most_active_day_all_time = max(
    commit_counts_all_time, key=commit_counts_all_time.get)
most_active_day_last_year = max(
    commit_counts_last_year, key=commit_counts_last_year.get)

# Create a markdown file and write the commit counts
with open(f"{username}-commit-analyze.md", "w") as f:
    f.write("# Commit Activity\n")
    f.write("\n")
    f.write("## All Time\n")
    f.write("\n")
    f.write("| Day       | Commits | % of Total |\n")
    f.write("| --------- | ------- | ---------- |\n")
    for day, count in commit_counts_all_time.items():
        percent_of_total = round((count / total_commits_all_time) * 100, 2)
        f.write(f"| {day} | {count} | {percent_of_total}% |\n")

    f.write("\n")
    f.write(f"Most active day: {most_active_day_all_time}\n")
    f.write("\n")
    f.write(f"Total commits: {total_commits_all_time}\n")
    f.write("\n")

    f.write("## Last Year\n")
    f.write("\n")
    f.write("| Day       | Commits | % of Total |\n")
    f.write("| --------- | ------- | ---------- |\n")
    for day, count in commit_counts_last_year.items():
        percent_of_total = round((count / total_commits_last_year) * 100, 2)
        f.write(f"| {day} | {count} | {percent_of_total}% |\n")

    f.write("\n")
    f.write(f"Most active day: {most_active_day_last_year}\n")
    f.write("\n")
    f.write(f"Total commits:{total_commits_last_year}\n")
    f.write("\n")

    f.write("### All time commit activity\n")
    f.write("\n")
    f.write("| Day of week | Commit count | Avg % |\n")
    f.write("|-------------|-------------|-------|\n")
    # Calculate the average percentage of commits for each day
    avg_commit_percent_all_time = {day: (
        count / total_commits_all_time) * 100 for day, count in commit_counts_all_time.items()}

    # Write the commit counts and average percentages to the markdown file
    for day, count in commit_counts_all_time.items():
        avg_percent = round(avg_commit_percent_all_time[day], 2)
        f.write(f"| {day} | {count} | {avg_percent}% |\n")

    f.write("\n")
    f.write(f"Most active day: {most_active_day_all_time}\n")
    f.write("\n")
    f.write(f"Total commits: {total_commits_all_time}\n")
