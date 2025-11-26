"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, X } from "lucide-react";
// @ts-ignore: Allow importing JSON (requires --resolveJsonModule in tsconfig)
import sampleApiResponse from "@/utils/sampleApiResponse.json";
import axios from "axios";
const API_URL = "http://localhost:3000/api/jobs";
function getDayRangeValue(datePosted) {
    switch (datePosted) {
        case "last24hr":
            return 1;
        case "lastweek":
            return 7;
        case "lastmonth":
            return 30;
        case "anytime":
        default:
            return 0;
    }
}
function buildApiQueryParams(filters) {
    // Build query string for API
    const params = new URLSearchParams();
    // Query: join with + for spaces, and encode
    if (filters.query) {
        params.append("query", filters.query.trim().replace(/\s+/g, "+"));
    }
    // Employment type
    if (filters.employmentType && filters.employmentType !== "all") {
        params.append("employment_type", filters.employmentType);
    }
    // Experience level
    if (filters.experienceLevel && filters.experienceLevel !== "all") {
        params.append("experience", filters.experienceLevel);
    }
    // Work type
    if (filters.workType && filters.workType !== "all") {
        params.append("workplace", filters.workType);
    }
    // Day range
    const dayRange = getDayRangeValue(filters.datePosted);
    if (dayRange > 0) {
        params.append("day_range", String(dayRange));
    }
    else {
        params.append("day_range", "0");
    }
    // Location (optional, not in your example, but included for completeness)
    if (filters.location) {
        params.append("location", filters.location);
    }
    return params.toString();
}
export default function JobAndInternshipPage() {
    var _a, _b;
    const [jobs] = useState(sampleApiResponse.jobs || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedJob, setSelectedJob] = useState(null);
    const [page, setPage] = useState(1);
    const jobsPerPage = 12;
    const [filters, setFilters] = useState({
        query: "",
        location: "",
        datePosted: "anytime",
        employmentType: "all",
        experienceLevel: "all",
        workType: "all",
    });
    async function QueryApiCall() {
        setLoading(true);
        setError("");
        try {
            const queryString = buildApiQueryParams(filters);
            const url = `${API_URL}?${queryString}`;
            // You can use GET or POST as needed. Here, GET is used for query params.
            const response = await axios.get(url);
            // You may want to update jobs state here if you want to use live data
            // setJobs(response.data.jobs)
            console.log("API URL:", url);
            console.log("API Response:", response.data);
        }
        catch (err) {
            setError("Failed to fetch jobs from API.");
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        // On mount, fetch jobs with default filters (or you can skip this)
        // For demo, just log the default query
        // QueryApiCall()
    }, []);
    const handleFilterChange = (key, value) => {
        setFilters((prev) => (Object.assign(Object.assign({}, prev), { [key]: value })));
        setPage(1); // Reset to first page when filters change
    };
    const clearFilter = (key) => {
        const defaultValue = key === "query" || key === "location" ? "" : key === "datePosted" ? "anytime" : "all";
        handleFilterChange(key, defaultValue);
    };
    const isDateWithinRange = (datePosted, range) => {
        if (!datePosted || range === "anytime")
            return true;
        const jobDate = new Date(datePosted);
        const now = new Date();
        const diffTime = now.getTime() - jobDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        switch (range) {
            case "last24hr":
                return diffDays <= 1;
            case "lastweek":
                return diffDays <= 7;
            case "lastmonth":
                return diffDays <= 30;
            default:
                return true;
        }
    };
    const filteredJobs = jobs.filter((job) => {
        var _a, _b;
        // Text search filter
        const matchesQuery = !filters.query ||
            job.title.toLowerCase().includes(filters.query.toLowerCase()) ||
            (typeof job.company === "object" &&
                ((_a = job.company) === null || _a === void 0 ? void 0 : _a.title) &&
                job.company.title.toLowerCase().includes(filters.query.toLowerCase())) ||
            (Array.isArray(job.locations) &&
                job.locations.some((loc) => {
                    if (typeof loc === "string")
                        return loc.toLowerCase().includes(filters.query.toLowerCase());
                    if (typeof loc === "object" && loc.city)
                        return loc.city.toLowerCase().includes(filters.query.toLowerCase());
                    return false;
                }));
        // Location filter
        const matchesLocation = !filters.location ||
            (Array.isArray(job.locations) &&
                job.locations.some((loc) => {
                    if (typeof loc === "string")
                        return loc.toLowerCase().includes(filters.location.toLowerCase());
                    if (typeof loc === "object" && loc.city)
                        return loc.city.toLowerCase().includes(filters.location.toLowerCase());
                    return false;
                })) ||
            (typeof job.location === "object" &&
                ((_b = job.location) === null || _b === void 0 ? void 0 : _b.city) &&
                job.location.city.toLowerCase().includes(filters.location.toLowerCase())) ||
            (typeof job.location === "string" && job.location.toLowerCase().includes(filters.location.toLowerCase()));
        // Date posted filter
        const matchesDate = isDateWithinRange(job.datePosted, filters.datePosted);
        // Employment type filter
        const matchesEmploymentType = filters.employmentType === "all" ||
            (job.employmentType && job.employmentType.toLowerCase().includes(filters.employmentType.toLowerCase())) ||
            (job.type && job.type.toLowerCase().includes(filters.employmentType.toLowerCase()));
        // Experience level filter
        const matchesExperience = filters.experienceLevel === "all" ||
            (job.experienceLevel && job.experienceLevel.toLowerCase().includes(filters.experienceLevel.toLowerCase()));
        // Work type filter (remote/hybrid/onsite)
        const matchesWorkType = filters.workType === "all" ||
            (job.workType && job.workType.toLowerCase().includes(filters.workType.toLowerCase()));
        return (matchesQuery && matchesLocation && matchesDate && matchesEmploymentType && matchesExperience && matchesWorkType);
    });
    // Pagination logic
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const paginatedJobs = filteredJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);
    const handlePrev = () => setPage((p) => Math.max(1, p - 1));
    const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));
    // Helper to get company image if available
    const getCompanyImage = (company) => {
        if (typeof company === "object" && (company === null || company === void 0 ? void 0 : company.image)) {
            return company.image;
        }
        return null;
    };
    const getActiveFiltersCount = () => {
        let count = 0;
        if (filters.query)
            count++;
        if (filters.location)
            count++;
        if (filters.datePosted !== "anytime")
            count++;
        if (filters.employmentType !== "all")
            count++;
        if (filters.experienceLevel !== "all")
            count++;
        if (filters.workType !== "all")
            count++;
        return count;
    };
    return (_jsxs("div", { className: "min-h-screen p-4 w-full flex flex-col items-center", style: { fontFamily: "Inter, Segoe UI, sans-serif" }, children: [_jsxs("div", { className: "w-full max-w-6xl mb-6", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: "Job & Internship Listings" }), _jsxs("div", { className: "flex gap-4 mb-4", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }), _jsx(Input, { placeholder: "Search jobs by title, company, or skills...", value: filters.query, onChange: (e) => handleFilterChange("query", e.target.value), className: "pl-10 h-12 text-base" }), filters.query && (_jsx("button", { onClick: () => clearFilter("query"), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600", children: _jsx(X, { className: "h-4 w-4" }) }))] }), _jsxs("div", { className: "relative flex-1", children: [_jsx(MapPin, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }), _jsx(Input, { placeholder: "Location (city, state, or remote)", value: filters.location, onChange: (e) => handleFilterChange("location", e.target.value), className: "pl-10 h-12 text-base" }), filters.location && (_jsx("button", { onClick: () => clearFilter("location"), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600", children: _jsx(X, { className: "h-4 w-4" }) }))] }), _jsx(Button, { className: "h-12 px-8 text-base font-semibold bg-teal-600 hover:bg-teal-700", onClick: QueryApiCall, children: "Search jobs" })] }), _jsxs("div", { className: "grid grid-cols-4 gap-4 mb-6", children: [_jsxs(Select, { value: filters.datePosted, onValueChange: (value) => handleFilterChange("datePosted", value), children: [_jsx(SelectTrigger, { className: "h-12 w-full", children: _jsx(SelectValue, { placeholder: "Date posted" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "anytime", children: "Anytime" }), _jsx(SelectItem, { value: "last24hr", children: "Last 24 hours" }), _jsx(SelectItem, { value: "lastweek", children: "Last week" }), _jsx(SelectItem, { value: "lastmonth", children: "Last month" })] })] }), _jsxs(Select, { value: filters.workType, onValueChange: (value) => handleFilterChange("workType", value), children: [_jsx(SelectTrigger, { className: "h-12 w-full", children: _jsx(SelectValue, { placeholder: "Work type" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All work types" }), _jsx(SelectItem, { value: "onsite", children: "On-site" }), _jsx(SelectItem, { value: "hybrid", children: "Hybrid" }), _jsx(SelectItem, { value: "remote", children: "Remote" })] })] }), _jsxs(Select, { value: filters.employmentType, onValueChange: (value) => handleFilterChange("employmentType", value), children: [_jsx(SelectTrigger, { className: "h-12 w-full", children: _jsx(SelectValue, { placeholder: "Employment type" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All types" }), _jsx(SelectItem, { value: "fulltime", children: "Full time" }), _jsx(SelectItem, { value: "parttime", children: "Part time" }), _jsx(SelectItem, { value: "contract", children: "Contract" }), _jsx(SelectItem, { value: "temporary", children: "Temporary" }), _jsx(SelectItem, { value: "other", children: "Other" })] })] }), _jsxs(Select, { value: filters.experienceLevel, onValueChange: (value) => handleFilterChange("experienceLevel", value), children: [_jsx(SelectTrigger, { className: "h-12 w-full", children: _jsx(SelectValue, { placeholder: "Experience" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All levels" }), _jsx(SelectItem, { value: "entry", children: "Entry level" }), _jsx(SelectItem, { value: "mid", children: "Mid level" }), _jsx(SelectItem, { value: "senior", children: "Senior level" }), _jsx(SelectItem, { value: "associate", children: "Associate" })] })] })] }), getActiveFiltersCount() > 0 && (_jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx("span", { className: "text-sm text-gray-600 mr-2", children: "Active filters:" }), filters.query && (_jsxs("span", { className: "inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200", children: ["Query: ", filters.query, _jsx("button", { onClick: () => clearFilter("query"), className: "ml-1 hover:text-blue-600", children: _jsx(X, { className: "h-3 w-3" }) })] })), filters.location && (_jsxs("span", { className: "inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-green-200", children: ["Location: ", filters.location, _jsx("button", { onClick: () => clearFilter("location"), className: "ml-1 hover:text-green-600", children: _jsx(X, { className: "h-3 w-3" }) })] })), filters.datePosted !== "anytime" && (_jsxs("span", { className: "inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-purple-900 dark:text-purple-200", children: ["Date: ", filters.datePosted, _jsx("button", { onClick: () => clearFilter("datePosted"), className: "ml-1 hover:text-purple-600", children: _jsx(X, { className: "h-3 w-3" }) })] })), filters.employmentType !== "all" && (_jsxs("span", { className: "inline-flex items-center gap-1 bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-orange-900 dark:text-orange-200", children: ["Type: ", filters.employmentType, _jsx("button", { onClick: () => clearFilter("employmentType"), className: "ml-1 hover:text-orange-600", children: _jsx(X, { className: "h-3 w-3" }) })] })), filters.experienceLevel !== "all" && (_jsxs("span", { className: "inline-flex items-center gap-1 bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-teal-900 dark:text-teal-200", children: ["Experience: ", filters.experienceLevel, _jsx("button", { onClick: () => clearFilter("experienceLevel"), className: "ml-1 hover:text-teal-600", children: _jsx(X, { className: "h-3 w-3" }) })] })), filters.workType !== "all" && (_jsxs("span", { className: "inline-flex items-center gap-1 bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-200", children: ["Work: ", filters.workType, _jsx("button", { onClick: () => clearFilter("workType"), className: "ml-1 hover:text-indigo-600", children: _jsx(X, { className: "h-3 w-3" }) })] }))] })), _jsx("div", { className: "mb-4", children: _jsxs("p", { className: "text-sm text-gray-600", children: ["Showing ", filteredJobs.length, " job", filteredJobs.length !== 1 ? "s" : "", getActiveFiltersCount() > 0 && " (filtered)"] }) })] }), loading ? (_jsx("div", { className: "text-center text-muted-foreground", children: "Loading jobs..." })) : error ? (_jsx("div", { className: "text-center text-destructive", children: error })) : filteredJobs.length === 0 ? (_jsx("div", { className: "text-center text-muted-foreground", children: "No jobs found matching your criteria. Try adjusting your filters." })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "grid grid-cols-3 gap-8 w-full max-w-6xl", children: paginatedJobs.map((job) => {
                            var _a, _b;
                            const companyImage = getCompanyImage(job.company);
                            return (_jsxs(Card, { className: "cursor-pointer rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-200 bg-white dark:bg-zinc-900 p-6", style: {
                                    fontFamily: "Inter, Segoe UI, sans-serif",
                                    minHeight: 220,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }, onClick: () => setSelectedJob(job), children: [_jsxs(CardHeader, { className: "pb-2 flex flex-row items-center gap-3", children: [companyImage && (_jsx("img", { src: companyImage || "/placeholder.svg", alt: "Company Logo", className: "size-24 rounded-md object-contain border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800 mr-2", style: { flexShrink: 0 } })), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx(CardTitle, { className: "text-xl font-bold mb-1 text-gray-900 dark:text-white", children: job.title }), _jsx("div", { className: "text-base text-gray-500 dark:text-gray-300 font-medium mb-1", children: typeof job.company === "object"
                                                            ? ((_a = job.company) === null || _a === void 0 ? void 0 : _a.title) || "Unknown Company"
                                                            : typeof job.company === "string"
                                                                ? job.company
                                                                : "Unknown Company" })] })] }), _jsxs(CardContent, { className: "pt-0", children: [_jsxs("div", { className: "flex flex-wrap gap-2 mb-2", children: [_jsx("span", { className: "inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200", children: job.employmentType || job.type || "N/A" }), job.compensation && (_jsx("span", { className: "inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-200", children: job.compensation })), _jsx("span", { className: "inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-gray-200", children: Array.isArray(job.locations)
                                                            ? job.locations
                                                                .map((loc) => (typeof loc === "string" ? loc : (loc === null || loc === void 0 ? void 0 : loc.city) || ""))
                                                                .filter(Boolean)
                                                                .join(", ")
                                                            : typeof job.location === "object"
                                                                ? ((_b = job.location) === null || _b === void 0 ? void 0 : _b.city) || "N/A"
                                                                : job.location || "N/A" })] }), _jsx("div", { className: "text-sm text-gray-700 dark:text-gray-200 mb-2 line-clamp-3", children: job.socialSharingDescription || job.description || "No description available." }), _jsx("div", { className: "flex justify-end", children: _jsx("span", { className: "text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline", children: "View Details \u2192" }) })] })] }, job.id));
                        }) }), totalPages > 1 && (_jsxs("div", { className: "flex items-center justify-center gap-4 mt-8", children: [_jsx(Button, { variant: "outline", className: "px-4 py-2 rounded-lg font-semibold bg-transparent", onClick: handlePrev, disabled: page === 1, children: "Previous" }), _jsxs("span", { className: "text-base font-medium", children: ["Page ", page, " of ", totalPages] }), _jsx(Button, { variant: "outline", className: "px-4 py-2 rounded-lg font-semibold bg-transparent", onClick: handleNext, disabled: page === totalPages, children: "Next" })] }))] })), selectedJob && (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2", style: { fontFamily: "Inter, Segoe UI, sans-serif" }, children: _jsxs("div", { className: "bg-white dark:bg-background rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 relative border border-gray-200 dark:border-gray-700", children: [_jsx("button", { className: "absolute top-2 right-2 text-xl text-muted-foreground hover:text-destructive", onClick: () => setSelectedJob(null), "aria-label": "Close", children: "\u00D7" }), _jsx("h2", { className: "text-3xl font-extrabold mb-2 text-gray-900 dark:text-white", children: selectedJob.title }), _jsx("div", { className: "mb-2 text-lg text-gray-500 dark:text-gray-300 font-medium", children: typeof selectedJob.company === "object"
                                ? ((_a = selectedJob.company) === null || _a === void 0 ? void 0 : _a.title) || "Unknown Company"
                                : typeof selectedJob.company === "string"
                                    ? selectedJob.company
                                    : "Unknown Company" }), _jsxs("div", { className: "mb-2 text-base", children: [_jsx("span", { className: "font-semibold", children: "Location:" }), " ", Array.isArray(selectedJob.locations)
                                    ? selectedJob.locations
                                        .map((loc) => (typeof loc === "string" ? loc : (loc === null || loc === void 0 ? void 0 : loc.city) || ""))
                                        .filter(Boolean)
                                        .join(", ")
                                    : typeof selectedJob.location === "object"
                                        ? ((_b = selectedJob.location) === null || _b === void 0 ? void 0 : _b.city) || "N/A"
                                        : selectedJob.location || "N/A"] }), _jsxs("div", { className: "mb-2 text-base", children: [_jsx("span", { className: "font-semibold", children: "Type:" }), " ", selectedJob.employmentType || selectedJob.type || "N/A"] }), selectedJob.compensation && (_jsxs("div", { className: "mb-2 text-base", children: [_jsx("span", { className: "font-semibold", children: "Compensation:" }), " ", selectedJob.compensation] })), selectedJob.department && (_jsxs("div", { className: "mb-2 text-base", children: [_jsx("span", { className: "font-semibold", children: "Department:" }), " ", selectedJob.department] })), _jsxs("div", { className: "mb-4", children: [_jsx("span", { className: "font-semibold", children: "Description:" }), _jsx("div", { className: "prose prose-sm max-w-none mt-1", dangerouslySetInnerHTML: {
                                        __html: selectedJob.description || "No description available.",
                                    } })] }), selectedJob.requirementsSection && (_jsxs("div", { className: "mb-4", children: [_jsx("span", { className: "font-semibold", children: "Skills/Requirements:" }), _jsx("div", { className: "prose prose-sm max-w-none mt-1", dangerouslySetInnerHTML: {
                                        __html: selectedJob.requirementsSection,
                                    } })] })), _jsx(Button, { asChild: true, className: "w-full mt-2 text-lg font-semibold rounded-lg", variant: "default", onClick: () => window.open(selectedJob.url, "_blank"), children: _jsx("a", { href: selectedJob.url, target: "_blank", rel: "noopener noreferrer", children: "Apply Now" }) })] }) }))] }));
}
